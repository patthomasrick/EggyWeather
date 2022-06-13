import { defineStore } from "pinia";

export const useLocationStore = defineStore({
  id: "location",
  state: () => ({
    latitude: 38.032,
    longitude: -78.5098,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
    latitude: (state) => state.latitude,
    longitude: (state) => state.longitude,
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
  },
});
