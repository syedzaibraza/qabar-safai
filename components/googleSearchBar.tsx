/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

type SelectedPlace = {
  placeId: string;
  address: string;
};

type Props = {
  placeholder?: string;
  className?: string;
  country?: string;
  onSelect?: (place: SelectedPlace) => void;
  onClear?: () => void;
};

export default function PlacesSearchSimple({
  placeholder = "Enter City & Graveyard Name",
  className = "",
  country = "pk",
  onSelect,
  onClear,
}: Props) {
  const [value, setValue] = useState<any>(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  if (!apiKey) {
    return (
      <input
        disabled
        placeholder={placeholder}
        className="w-full px-6 py-5 rounded-2xl border-2 border-[#5F7F8F] bg-[#D9D9D9]"
      />
    );
  }

  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <svg
          className="size-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>

      <GooglePlacesAutocomplete
        apiKey={apiKey}
        debounce={400}
        selectProps={{
          value,

          // 🔹 Handles selecting & clearing values
          onChange: (v) => {
            setValue(v);

            if (!v) {
              onClear?.();
              return;
            }

            onSelect?.({
              placeId: v.value.place_id,
              address: v.label,
            });
          },

          placeholder,
          isClearable: true,

          // 🔹 Removes dropdown arrow + separator
          components: {
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          },

          // 🔹 Custom styling of the input
          styles: {
            // Main container styling
            control: (provided) => ({
              ...provided,
              borderRadius: "11px",
              border: "2px solid #5F7F8F",
              backgroundColor: "white",
              paddingLeft: "40px", // space for icon
              minHeight: "62px",
              boxShadow: "none",
              "&:hover": {
                border: "2px solid #5F7F8F",
              },
            }),

            // Input text styling
            input: (provided) => ({
              ...provided,
              color: "#5F7F8F",
              fontSize: "16px",
            }),

            // Placeholder styling
            placeholder: (provided) => ({
              ...provided,
              color: "#5F7F8F",
              fontSize: "16px",
            }),

            // Selected value styling
            singleValue: (provided) => ({
              ...provided,
              color: "#5F7F8F",
              fontSize: "16px",
            }),

            // Dropdown menu styling
            menu: (provided) => ({
              ...provided,
              borderRadius: "16px",
            }),
          },


          className,
        }}
        autocompletionRequest={{
          componentRestrictions: { country },
        }}
      />
    </div>
  );
}
