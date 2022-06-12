<!-- BlogPost.vue -->
<script setup lang="ts">
defineProps<{
  number: number;
  name: string;
  start_time: string;
  end_time: string;
  is_daytime: boolean;
  temperature: number;
  temperature_unit: string;
  wind_speed: string;
  wind_direction: string;
  icon: string;
  short_forecast: string;
  detailed_forecast: string;
}>();
</script>

<template>
  <div class="card mb-5">
    <div class="card-header">
      <p class="card-header-title">{{ name }} - {{ short_forecast }}</p>
      <button class="card-header-icon" aria-label="more options">
        <span class="icon">
          <font-awesome-icon icon="angle-down" aria-hidden="true" />
        </span>
      </button>
    </div>
    <div class="card-content">
      <div class="content">
        <p>
          <font-awesome-icon icon="fa-solid fa-temperature-half" />
          {{ temperature }} {{ temperature_unit }}
        </p>
        <p>
          <font-awesome-icon icon="clock" />
          {{ start_time }} - {{ end_time }}
        </p>
        <p>{{ detailed_forecast }}</p>
      </div>
    </div>
  </div>
</template>
