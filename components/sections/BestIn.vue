<template>
  <section class="we_are_best_in_section">
    <h2 class="title-h2 font-family-1 t-dark text-center">We are best in:</h2>
    <NuxtImg
      src="/images/home/cat-paw.svg"
      alt="cat-paw"
      class="cat-paw-image"
    />
    <div class="services_container">
      <NuxtLink
        to="/"
        class="service_item d-flex-column"
        v-for="(service, index) in services"
      >
        <div class="service_icon">
          <NuxtImg
            :src="service.icon"
            alt="service_icon"
            class="service_icon_image"
            quality="100"
            :class="[`image_${index}`]"
            fit="cover"
          />
        </div>
        <label class="t-dark font-family-2 medium-xxxl">{{
          service.title
        }}</label>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: "/images/home/vaccination.svg",
    title: "Vaccination",
  },
  {
    icon: "/images/home/paw-grooming.svg",
    title: "Grooming",
  },
  {
    icon: "/images/home/pet-care.svg",
    title: "Veterinary Care",
  },
  {
    icon: "/images/home/surgery.svg",
    title: "Surgery",
  },
  {
    icon: "/images/home/laboratory.svg",
    title: "Laboratory",
  },
  {
    icon: "/images/home/pet-shop.svg",
    title: "Pet Shop",
  },
];
</script>
