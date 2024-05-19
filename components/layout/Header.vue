<template>
  <header id="header" :class="[hasScrolled && 'scrolled']" class="b-radius-9">
    <div class="d-flex-row justify-start flex-4 desktop-navs gap-48">
      <NuxtLink to="/" class="font-family-2 bold-l t-dark">Home</NuxtLink>
      <NuxtLink to="/" class="font-family-2 bold-l t-dark">About</NuxtLink>
      <NuxtLink to="/" class="font-family-2 bold-l t-dark">Services</NuxtLink>
      <NuxtLink to="/" class="font-family-2 bold-l t-dark">Contact</NuxtLink>
    </div>
    <div class="d-flex-column header-logo-container gap-0">
      <NuxtImg
        src="/images/header/header-logo.webp"
        alt="header-logo"
        width="84"
        height="71"
        fit="contain"
        class="header-logo"
      />
      <h1 class="bold-xxxxl font-family-1 t-dark">The Pets' Concept</h1>
    </div>
    <div class="d-flex-row justify-end flex-4 desktop-navs gap-24">
      <p class="font-family-2 bold-l t-dark">+1-800-356-8933</p>
      <button class="font-family-2 yellow pill-header t-dark medium-l">
        Connect
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue";
const hasScrolled = ref(false);

const checkScroll = () => {
  if (window.scrollY > 10) {
    hasScrolled.value = true;
  } else {
    hasScrolled.value = false;
  }
};

onNuxtReady(() => {
  window.addEventListener("scroll", checkScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<style>
@import "/assets/styles/modules/header.scss";
</style>
