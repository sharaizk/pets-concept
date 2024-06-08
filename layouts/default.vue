<template>
  <div class="main_layout">
    <Header />
    <slot></slot>
  </div>
  <FabButton />
  <Footer />
</template>

<script setup>
import Header from "~/components/layout/Header.vue";
import FabButton from "~/components/custom/FabButton.vue";
import Footer from "~/components/layout/Footer.vue";
</script>
