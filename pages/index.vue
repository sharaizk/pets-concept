<template>
  <LandingHeroSection />
  <div class="d-flex-column justify-start align-start minor_info gap-24">
    <p class="t-dark font-family-2 medium-xl">
      Enter our Pet Haven<br />
      where skilled Veterinarians blend expertise with love
    </p>

    <a href="https://maps.app.goo.gl/VJhC53LtEUuCvemv6" target="_blank" referrerpolicy="no-referrer" rel="no-referrer"
      class="rated_chip t-dark font-family-2 regular-l d-flex-row.justify-start gap-18">
      <Icon name="logos:google-maps" size="20" />
      4.9 Google reviews
    </a>


  </div>
  <HappyPets />
  <BestIn />
  <WhyRelyUs />
</template>

<script setup>
import LandingHeroSection from "~/components/sections/LandingHeroSection.vue";
import HappyPets from "~/components/sections/HappyPets.vue";
import BestIn from "~/components/sections/BestIn.vue";
import WhyRelyUs from '~/components/sections/WhyRelyUs.vue'
definePageMeta({
  layout: "default",
});
</script>
