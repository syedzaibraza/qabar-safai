// Major graveyards in Pakistan with coordinates
export interface Graveyard {
  name: string;
  city: string;
  lat: number;
  lng: number;
  address?: string;
}

export const pakistanGraveyards: Graveyard[] = [
  // Lahore
  { name: "Miani Sahib Graveyard", city: "Lahore", lat: 31.5204, lng: 74.3587, address: "Miani Sahib, Lahore" },
  { name: "Shahdara Graveyard", city: "Lahore", lat: 31.6000, lng: 74.3000, address: "Shahdara, Lahore" },
  { name: "Model Town Graveyard", city: "Lahore", lat: 31.4800, lng: 74.3000, address: "Model Town, Lahore" },
  { name: "Gulshan-e-Ravi Graveyard", city: "Lahore", lat: 31.5500, lng: 74.3500, address: "Gulshan-e-Ravi, Lahore" },
  
  // Karachi
  { name: "Mewa Shah Graveyard", city: "Karachi", lat: 24.8607, lng: 67.0011, address: "Mewa Shah, Karachi" },
  { name: "Paposh Nagar Graveyard", city: "Karachi", lat: 24.9000, lng: 67.0500, address: "Paposh Nagar, Karachi" },
  { name: "Gulshan-e-Iqbal Graveyard", city: "Karachi", lat: 24.9200, lng: 67.0800, address: "Gulshan-e-Iqbal, Karachi" },
  { name: "Korangi Graveyard", city: "Karachi", lat: 24.8000, lng: 67.1000, address: "Korangi, Karachi" },
  
  // Islamabad
  { name: "H-8 Graveyard", city: "Islamabad", lat: 33.6844, lng: 73.0479, address: "Sector H-8, Islamabad" },
  { name: "G-7 Graveyard", city: "Islamabad", lat: 33.7000, lng: 73.0500, address: "Sector G-7, Islamabad" },
  { name: "I-8 Graveyard", city: "Islamabad", lat: 33.6800, lng: 73.0400, address: "Sector I-8, Islamabad" },
  
  // Rawalpindi
  { name: "Raja Bazaar Graveyard", city: "Rawalpindi", lat: 33.6000, lng: 73.0500, address: "Raja Bazaar, Rawalpindi" },
  { name: "Lalkurti Graveyard", city: "Rawalpindi", lat: 33.5800, lng: 73.0400, address: "Lalkurti, Rawalpindi" },
  
  // Faisalabad
  { name: "Jinnah Colony Graveyard", city: "Faisalabad", lat: 31.4500, lng: 73.1000, address: "Jinnah Colony, Faisalabad" },
  { name: "Madina Town Graveyard", city: "Faisalabad", lat: 31.4200, lng: 73.0800, address: "Madina Town, Faisalabad" },
  
  // Multan
  { name: "Shah Rukn-e-Alam Graveyard", city: "Multan", lat: 30.1575, lng: 71.5249, address: "Multan" },
  { name: "Bosan Road Graveyard", city: "Multan", lat: 30.2000, lng: 71.5000, address: "Bosan Road, Multan" },
  
  // Peshawar
  { name: "Wazir Bagh Graveyard", city: "Peshawar", lat: 34.0151, lng: 71.5249, address: "Wazir Bagh, Peshawar" },
  { name: "Hayatabad Graveyard", city: "Peshawar", lat: 33.9800, lng: 71.5000, address: "Hayatabad, Peshawar" },
  
  // Quetta
  { name: "Hazara Town Graveyard", city: "Quetta", lat: 30.1798, lng: 66.9750, address: "Hazara Town, Quetta" },
  { name: "Sariab Road Graveyard", city: "Quetta", lat: 30.2000, lng: 67.0000, address: "Sariab Road, Quetta" },
  
  // Gujranwala
  { name: "Gujranwala Central Graveyard", city: "Gujranwala", lat: 32.1617, lng: 74.1883, address: "Gujranwala" },
  
  // Sialkot
  { name: "Sialkot Graveyard", city: "Sialkot", lat: 32.4945, lng: 74.5229, address: "Sialkot" },
  
  // Sargodha
  { name: "Sargodha Graveyard", city: "Sargodha", lat: 32.0836, lng: 72.6711, address: "Sargodha" },
  
  // Bahawalpur
  { name: "Bahawalpur Graveyard", city: "Bahawalpur", lat: 29.4000, lng: 71.6833, address: "Bahawalpur" },
  
  // Sukkur
  { name: "Sukkur Graveyard", city: "Sukkur", lat: 27.7025, lng: 68.8581, address: "Sukkur" },
  
  // Larkana
  { name: "Larkana Graveyard", city: "Larkana", lat: 27.5590, lng: 68.2120, address: "Larkana" },
];

