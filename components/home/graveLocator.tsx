"use client";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import GoogleSearchBar from "../googleSearchBar";
import { type Graveyard } from "@/data/graveyards";

interface PlaceDetails {
    geometry?: {
        location?: {
            lat: () => number;
            lng: () => number;
        };
    };
    name?: string;
    formatted_address?: string;
}

interface PlaceResult {
    place_id?: string;
    name?: string;
    geometry?: {
        location?: {
            lat: () => number;
            lng: () => number;
        };
    };
    formatted_address?: string;
    vicinity?: string;
}

// Calculate distance between two coordinates in kilometers
const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

const GraveLocator = () => {
    const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number; address: string } | null>(null);
    const [nearbyGraveyards, setNearbyGraveyards] = useState<Graveyard[]>([]);
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const [mapError, setMapError] = useState<string | null>(null);
    const [isSearching, setIsSearching] = useState(false);
    const mapRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapInstanceRef = useRef<any>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const markersRef = useRef<any[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const infoWindowRef = useRef<any>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const locationMarkerRef = useRef<any>(null);

    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
    const pakistanCenter = useMemo(() => ({ lat: 30.3753, lng: 69.3451 }), []);
    const SEARCH_RADIUS_METERS = 10000; // Search radius in meters (50km)

    // Initialize map
    const initializeMap = useCallback(() => {
        const googleMaps = window.google?.maps;
        if (!googleMaps || !mapRef.current || mapInstanceRef.current) return;

        try {
            const map = new googleMaps.Map(mapRef.current, {
                zoom: 6,
                center: pakistanCenter,
                mapTypeId: "roadmap",
                disableDefaultUI: true,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: true,
                zoomControl: true,
                scaleControl: false,
                rotateControl: false,
            });
            mapInstanceRef.current = map;
            setTimeout(() => setIsMapLoaded(true), 0);
        } catch {
            setMapError("Failed to initialize map.");
        }
    }, [pakistanCenter]);

    // Find nearby graveyards using Google Places API
    const findNearbyGraveyards = useCallback(async (lat: number, lng: number): Promise<Graveyard[]> => {
        const googleMaps = window.google?.maps;
        if (!googleMaps || !mapInstanceRef.current) {
            return [];
        }

        setIsSearching(true);
        const foundGraveyards: Graveyard[] = [];
        const seenPlaceIds = new Set<string>();

        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const PlacesService = (googleMaps as any).PlacesService || (googleMaps as any).places?.PlacesService;
            if (!PlacesService) {
                console.error("PlacesService not available");
                setIsSearching(false);
                return [];
            }
            const placesService = new PlacesService(mapInstanceRef.current);

            // Search for cemeteries using nearbySearch
            const nearbySearchPromise = new Promise<PlaceResult[]>((resolve) => {
                placesService.nearbySearch(
                    {
                        location: { lat, lng },
                        radius: SEARCH_RADIUS_METERS,
                        type: "cemetery",
                    },
                    (results: PlaceResult[] | null, status: string) => {
                        if (status === "OK" && results) {
                            resolve(results);
                        } else {
                            resolve([]);
                        }
                    }
                );
            });

            // Search for graveyards using text search
            const textSearchPromise = new Promise<PlaceResult[]>((resolve) => {
                placesService.textSearch(
                    {
                        query: "graveyard cemetery قبرستان",
                        location: { lat, lng },
                        radius: SEARCH_RADIUS_METERS,
                    },
                    (results: PlaceResult[] | null, status: string) => {
                        if (status === "OK" && results) {
                            resolve(results);
                        } else {
                            resolve([]);
                        }
                    }
                );
            });

            // Wait for both searches to complete
            const [nearbyResults, textResults] = await Promise.all([nearbySearchPromise, textSearchPromise]);

            // Combine and deduplicate results
            const allResults = [...nearbyResults, ...textResults];

            allResults.forEach((place: PlaceResult) => {
                if (!place.place_id || seenPlaceIds.has(place.place_id)) {
                    return;
                }

                if (place.geometry?.location) {
                    const placeLat = place.geometry.location.lat();
                    const placeLng = place.geometry.location.lng();

                    // Filter out places that are too far (double-check with distance calculation)
                    const distance = calculateDistance(lat, lng, placeLat, placeLng);
                    if (distance <= SEARCH_RADIUS_METERS / 1000) {
                        seenPlaceIds.add(place.place_id);
                        foundGraveyards.push({
                            name: place.name || "Unknown Graveyard",
                            city: place.formatted_address?.split(",")[place.formatted_address.split(",").length - 2]?.trim() || "Unknown",
                            lat: placeLat,
                            lng: placeLng,
                            address: place.formatted_address || place.vicinity || "",
                        });
                    }
                }
            });

            setIsSearching(false);
            return foundGraveyards;
        } catch (error) {
            console.error("Error searching for graveyards:", error);
            setIsSearching(false);
            return [];
        }
    }, []);

    // Update markers on map
    const updateMarkers = useCallback((location: { lat: number; lng: number; address: string }, graveyards: Graveyard[]) => {
        const googleMaps = window.google?.maps;
        if (!mapInstanceRef.current || !googleMaps) return;

        // Clear existing markers
        markersRef.current.forEach((marker) => marker.setMap(null));
        markersRef.current = [];
        if (locationMarkerRef.current) {
            locationMarkerRef.current.setMap(null);
            locationMarkerRef.current = null;
        }
        if (infoWindowRef.current) infoWindowRef.current.close();

        // Add marker for selected location
        const locationMarker = new googleMaps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: mapInstanceRef.current,
            title: location.address,
            icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                scaledSize: new googleMaps.Size(40, 40),
            },
            animation: googleMaps.Animation.DROP,
        });
        locationMarkerRef.current = locationMarker;

        if (graveyards.length === 0) {
            // If no graveyards found, just center on selected location
            mapInstanceRef.current.setCenter({ lat: location.lat, lng: location.lng });
            mapInstanceRef.current.setZoom(12);
            return;
        }

        const bounds = new googleMaps.LatLngBounds();
        bounds.extend({ lat: location.lat, lng: location.lng });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const markers: any[] = [];

        graveyards.forEach((graveyard) => {
            const position = { lat: graveyard.lat, lng: graveyard.lng };
            bounds.extend(position);

            const marker = new googleMaps.Marker({
                position,
                map: mapInstanceRef.current,
                title: `${graveyard.name}, ${graveyard.city}`,
                icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                    scaledSize: new googleMaps.Size(32, 32),
                },
            });

            const infoWindow = new googleMaps.InfoWindow({
                content: `
          <div style="padding: 12px; min-width: 200px;">
            <h3 style="margin: 0 0 6px 0; font-weight: bold; font-size: 16px;">${graveyard.name}</h3>
            <p style="margin: 0 0 4px 0; font-size: 14px; color: #666;">${graveyard.city}</p>
            ${graveyard.address ? `<p style="margin: 4px 0 0 0; font-size: 12px; color: #888;">${graveyard.address}</p>` : ""}
            <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${graveyard.lat},${graveyard.lng}', '_blank')" style="margin-top: 8px; padding: 6px 12px; background: #607F90; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Get Directions</button>
          </div>
        `,
            });

            googleMaps.event.addListener(marker, "click", () => {
                if (infoWindowRef.current) infoWindowRef.current.close();
                infoWindow.open(mapInstanceRef.current, marker);
                infoWindowRef.current = infoWindow;
            });

            markers.push(marker);
        });

        markersRef.current = markers;
        mapInstanceRef.current.fitBounds(bounds);
    }, []);

    // Handle place selection
    const handlePlaceSelect = useCallback(async (place: { placeId: string; address: string }) => {
        const googleMaps = window.google?.maps;
        if (!googleMaps || !mapInstanceRef.current) {
            console.error("Google Maps not loaded");
            return;
        }

        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const PlacesService = (googleMaps as any).PlacesService || (googleMaps as any).places?.PlacesService;
            if (!PlacesService) {
                console.error("PlacesService not available");
                return;
            }
            const placesService = new PlacesService(mapInstanceRef.current);

            placesService.getDetails(
                {
                    placeId: place.placeId,
                    fields: ["geometry", "name", "formatted_address"],
                },
                async (placeDetails: PlaceDetails | null, status: string) => {
                    if (status === "OK" && placeDetails?.geometry?.location) {
                        const lat = placeDetails.geometry.location.lat();
                        const lng = placeDetails.geometry.location.lng();

                        const location = {
                            lat,
                            lng,
                            address: place.address,
                        };

                        setSelectedLocation(location);

                        // Find nearby graveyards using Google Places API
                        const nearby = await findNearbyGraveyards(lat, lng);
                        setNearbyGraveyards(nearby);

                        // Update map markers
                        updateMarkers(location, nearby);
                    } else {
                        console.error("Failed to get place details:", status);
                        setMapError("Failed to get location details.");
                    }
                }
            );
        } catch (error) {
            console.error("Error getting place details:", error);
            setMapError("Failed to process selected location.");
        }
    }, [findNearbyGraveyards, updateMarkers]);

    // Handle search button click
    const handleSearchClick = async () => {
        if (selectedLocation) {
            // Re-trigger search with current location
            const nearby = await findNearbyGraveyards(selectedLocation.lat, selectedLocation.lng);
            setNearbyGraveyards(nearby);
            updateMarkers(selectedLocation, nearby);
        }
    };

    // Initialize map on load
    useEffect(() => {
        if (window.google?.maps && mapRef.current && !mapInstanceRef.current) {
            setTimeout(() => initializeMap(), 0);
        }
    }, [initializeMap]);

    // Load Google Maps script if not already loaded
    useEffect(() => {
        if (!googleMapsApiKey || window.google?.maps) return;

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
            setTimeout(() => {
                if (window.google?.maps && mapRef.current && !mapInstanceRef.current) {
                    initializeMap();
                } else {
                    setMapError("Failed to load Google Maps.");
                }
            }, 100);
        };
        script.onerror = () => setMapError("Failed to load Google Maps script.");
        document.head.appendChild(script);

        return () => {
            const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
            if (existingScript && existingScript.parentNode) {
                existingScript.parentNode.removeChild(existingScript);
            }
        };
    }, [googleMapsApiKey, initializeMap]);

    return (
        <section className='px-4 py-14'>
            <div className="lg:max-w-4xl xl:max-w-7xl 2xl:max-w-360 mx-auto grid grid-cols-2 grid-rows-1 gap-8">
                <div className="w-[70%] mx-auto space-y-4">
                    <h2 className='text-4xl md:text-5xl font-semibold mb-3'>Graveyard Locator</h2>
                    <p className='text-xl font-semibold'>Find graveyards near you. Serving multiple locations to help you locate your loved ones&apos; graves.</p>
                    <GoogleSearchBar
                        placeholder="Enter City & Graveyard Name"
                        onSelect={handlePlaceSelect}
                        className="w-full"
                    />
                    <button
                        onClick={handleSearchClick}
                        className="w-full cursor-pointer bg-primary text-white px-4 py-2 flex items-center justify-center gap-2 rounded-md"
                    >
                        <Image src="/icons/mappin-w.svg" alt="search" width={100} height={100} className="w-3 h-5" />
                        <p className="text-xl font-semibold">Search Location</p>
                    </button>
                    <div className="flex items-start gap-3 mt-10">
                        <svg className="size-6 text-primary mt-0.5 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <div className="flex-1">
                            <p className="font-bold text-xl">Easy Navigation</p>
                            <p className="text-xl font-normal mt-1">
                                Get directions and detailed location information.
                            </p>

                        </div>
                    </div>
                    {selectedLocation && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-md">
                            <p className="text-lg ">
                                <strong className="font-bold">Selected:</strong> {selectedLocation.address}
                            </p>
                            <p className="text-lg mt-1">
                                <strong className="font-bold">Found:</strong> {isSearching ? "Searching..." : `${nearbyGraveyards.length} graveyard${nearbyGraveyards.length !== 1 ? 's' : ''} within ${SEARCH_RADIUS_METERS / 1000}km`}
                            </p>
                        </div>
                    )}
                </div>
                <div className="h-[500px] rounded-lg overflow-hidden border-2 border-gray-300 bg-gray-100 relative">
                    <div ref={mapRef} className="w-full h-full" />
                    {mapError && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-95 text-center p-8 z-10">
                            <svg className="w-16 h-16 text-red-500 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <h3 className="text-xl font-semibold text-red-600 mb-2">Map Error</h3>
                            <p className="text-gray-600">{mapError}</p>
                        </div>
                    )}
                    {!isMapLoaded && !mapError && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-center p-8 z-10">
                            <svg className="w-16 h-16 text-primary mb-4 animate-pulse" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <h3 className="w-2xs text-xl font-semibold text-primary mb-2">Interactive Map
                                Map integration would appear here</h3>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default GraveLocator;