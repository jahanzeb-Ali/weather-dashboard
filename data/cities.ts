interface CityGroup {
  province: string;
  cities: string[];
}

export const pakistanCities: CityGroup[] = [
  {
    province: "Sindh",
    cities: [
      "Karachi",
      "Hyderabad",
      "Sukkur",
      "Larkana",
      "Mirpur Khas",
      "Nawabshah",
      "Jacobabad",
      "Shikarpur",
      "Khairpur",
      "Tando Adam",
    ],
  },
  {
    province: "Khyber Pakhtunkhwa",
    cities: [
      "Peshawar",
      "Mardan",
      "Mingora",
      "Kohat",
      "Abbottabad",
      "Mansehra",
      "Swabi",
      "Nowshera",
      "Dera Ismail Khan",
      "Charsadda",
    ],
  },
  {
    province: "Balochistan",
    cities: [
      "Quetta",
      "Turbat",
      "Khuzdar",
      "Hub",
      "Chaman",
      "Gwadar",
      "Dera Murad Jamali",
      "Zhob",
      "Loralai",
      "Pishin",
    ],
  },
  {
    province: "Punjab",
    cities: [
      "Lahore",
      "Faisalabad",
      "Rawalpindi",
      "Multan",
      "Gujranwala",
      "Sialkot",
      "Bahawalpur",
      "Sargodha",
      "Sahiwal",
      "Okara",
      "Gujrat",
      "Jhelum",
      "Sheikhupura",
      "Kasur",
      "Rahim Yar Khan",
      "Wah Cantonment",
    ],
  },
  {
    province: "Islamabad Capital Territory",
    cities: ["Islamabad"],
  },
  {
    province: "Gilgit-Baltistan",
    cities: ["Gilgit", "Skardu", "Chilas", "Ghanche", "Hunza"],
  },
  {
    province: "Azad Kashmir",
    cities: ["Muzaffarabad", "Mirpur", "Kotli", "Bhimber", "Rawalakot"],
  },
];

// Flat list of all cities for search functionality
export const allPakistanCities = pakistanCities.reduce<string[]>(
  (acc, group) => [...acc, ...group.cities],
  []
);
