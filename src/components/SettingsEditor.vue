<script lang="ts">
import { useLocationStore } from "@/stores/location";

export default {
  data() {
    const settingsStore = useLocationStore();

    return {
      latitude: settingsStore.latitude,
      longitude: settingsStore.longitude,
    };
  },

  setup() {
    const settingsStore = useLocationStore();

    return {
      settingsStore: settingsStore,
      setLatitude: settingsStore.setLatitude,
      setLongitude: settingsStore.setLongitude,
      geolocate: settingsStore.geolocate,
    };
  },
};
</script>

<template>
  <p>Latitude: {{ settingsStore.latitude }}</p>
  <p>Longitude: {{ settingsStore.longitude }}</p>

  <div class="field">
    <label for="latitude" class="label">Latitude</label>
    <div class="control">
      <input
        type="text"
        class="input"
        placeholder="38.032"
        v-model="latitude"
      />
    </div>
  </div>

  <div class="field">
    <label for="longitude" class="label">Longitude</label>
    <div class="control">
      <input
        type="text"
        class="input"
        placeholder="-78.510"
        v-model="longitude"
      />
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button
        class="button is-link"
        @click="
          setLatitude(latitude);
          setLongitude(longitude);
        "
      >
        Save
      </button>
    </div>
    <div class="control">
      <button class="button is-link" @click="geolocate()">
        Get my location
      </button>
    </div>
  </div>
</template>
