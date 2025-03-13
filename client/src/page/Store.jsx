import { create } from "zustand";
import ProfilePic from "/src/assets/images/specialist/portfolio picture.jpg";

export const useSplashStore = create((set) => ({
  loading: true,
  setLoading: (value) => set({ loading: value }),
}));

export const useProfileStore = create((set) => ({
  ProfileImage: ProfilePic,
  setProfileImage: (image) => set({ ProfileImage: image }),
  deleteImage: () => set({ profileImage: null }),
}));

export const useCurrentTimeStore = create((set) => ({
  hours: new Date().getHours(),
  greeting: "",
  town: "",
  city: "",
  country: "",

  updateTime: () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Fetch local town, city, and country using BigDataCloud API
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await response.json();

          const town =
            data.locality || data.principalSubdivision || "Unknown Town";
          const city = data.city || "Unknown City";
          const country = data.countryName || "Unknown Country";

          // Get local time based on detected time zone
          const localTime = new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            hour12: false,
            timeZone: data.timezone || "UTC",
          });

          const hours = parseInt(localTime.split(":")[0]);

          let greeting = "Good Evening,";
          if (hours < 12) {
            greeting = "Good Morning,";
          } else if (hours < 15) {
            greeting = "Good Afternoon,";
          }

          set({ hours, greeting, town, city, country });
        } catch (error) {
          console.error("Error fetching location:", error);
        }
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  },
}));

setInterval(() => {
  useCurrentTimeStore.getState().updateTime();
}, 10000);

export const useSpaStore = create((set) => ({
  activeComponent: "A",
  setActiveComponent: (id) => set({ activeComponent: id }),
}));

export const useModalStore = create((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useCountryStore = create((set) => ({
  countries: [],
  selectedCountry: null,
  setCountries: (countries) => set({ countries }),
  setSelectedCountry: (selectedCountry) => set({ selectedCountry }),
}));
