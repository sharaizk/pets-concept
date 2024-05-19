<template>
  <section class="landing_hero_section">
    <div class="hero_content_container common_section_container">
      <div class="d-flex-column align-start flex-5 left_area section gap-50">
        <h2 class="t-dark font-family-1 title-h1 f-w-700">
          Your pet,<br />our priority
        </h2>

        <div class="d-flex-row justify-start align-start lg-row-to-col flex-1">
          <button class="font-family-2 dark t-white pill-cta medium-l">
            Learn more
          </button>
          <button class="font-family-2 yellow pill-cta t-dark medium-l">
            Connect with us on Whatsapp
          </button>
        </div>
      </div>
      <div
        class="d-flex-column justify-end align-end flex-5 section right_area"
      ></div>
      <NuxtImg
        class="hero-second-image"
        src="/images/home/hero-second.webp"
        placeholder="/images/home/hero-second-placeholder.webp"
        alt="hero-second-image"
        quality="100"
      />
    </div>
  </section>
</template>

<script setup></script>

