import { defineStore } from "pinia";

export const useLocationStore = defineStore({
  id: "location",
  state: () => ({
    latitude: 38.032,
    longitude: -78.51,
  }),
  getters: {
    // // doubleCount: (state) => state.counter * 2,
    // latitude: (state) => state.latitude,
    // longitude: (state) => state.longitude,
    coord: (state) => {
      return {
        latitude: state.latitude,
        longitude: state.longitude,
      };
    },
  },
  actions: {
    // increment() {
    //   this.counter++;
    // },

    setLatitude(latitude: number) {
      this.latitude = Number(latitude);
    },

    setLongitude(longitude: number) {
      this.longitude = Number(longitude);
    },

    geolocate() {
      // Use Geolocation to get the current location.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setLatitude(position.coords.latitude);
            this.setLongitude(position.coords.longitude);
          },
          (error) => {
            console.log(error);
          }
        );
      }
    },
  },
});
