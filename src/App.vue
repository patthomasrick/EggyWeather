<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />

  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <p class="title">Eggy - Weather</p>
        <p class="subtitle" v-if="subtitle">{{ subtitle }}</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <RouterView />
    </div>
  </section>
</template>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
</style>
