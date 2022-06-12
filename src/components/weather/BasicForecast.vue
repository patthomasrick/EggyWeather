<script lang="ts">
import { fetchBasicForecast } from "../../library/BasicForecaseService";
import PeriodCard from "@/components/weather/PeriodCard.vue";
import dayjs from "dayjs";

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

  components: {
    PeriodCard,
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

    formatDateTime(date_time) {
      return dayjs(date_time).format("MMM D, h:mm a");
    },
  },
};
</script>

<template>
  <div>
    <h1 class="title">Forecast</h1>
    <p v-if="!loading">
      Last updated
      {{ formatDateTime(weather_data.properties.updated) }}
    </p>
    <p v-else>Loading...</p>

    <div v-if="!loading">
      <PeriodCard
        class="card"
        v-for="period in weather_data.properties.periods"
        :key="period.number"
        :number="period.number"
        :name="period.name"
        :start_time="formatDateTime(period.startTime)"
        :end_time="formatDateTime(period.endTime)"
        :is_daytime="period.isDaytime"
        :temperature="period.temperature"
        :temperature_unit="period.temperatureUnit"
        :wind_speed="period.windSpeed"
        :wind_direction="period.windDirection"
        :icon="period.icon"
        :short_forecast="period.shortForecast"
        :detailed_forecast="period.detailedForecast"
      ></PeriodCard>
    </div>
  </div>
</template>
