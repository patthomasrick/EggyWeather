<script lang="ts">
import { ref, computed } from "vue";
import { fetchBasicForecast } from "../../library/BasicForecaseService";

export default {
  name: "ForecastData",
  props: {},

  data() {
    return {
      weather_data: null,
      loading: true,
      error: null,
    };
  },

  mounted() {
    this.getBasicForecast();
  },

  methods: {
    getBasicForecast() {
      fetchBasicForecast()
        .then((response) => {
          this.weather_data = response;
          this.loading = false;
          console.log(response);
        })
        .catch((e) => {
          this.loading = false;
          console.log(e);
        });
    },
  },
};
</script>

<template>
  <div>
    <h1 class="title">Forecast</h1>
    <p v-if="!loading">Loaded. {{ weather_data.properties.periods[0] }}</p>
    <p v-if="loading">Loading...</p>
  </div>
</template>
