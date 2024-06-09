<template>
  <footer id="footer-container">
    <div class="footer-second-container">
      <div class="d-flex-column justify-start align-start gap-18 top-footer">
        <div class="d-flex-row space-between md-row-to-col">
          <div class="logo-container d-flex-row flex-5 justify-start">
            <div
              class="d-flex-row justify-start align-end footer-logo-container gap-0"
            >
              <NuxtImg
                src="/images/footer/footer-logo.webp"
                alt="header-logo"
                fit="contain"
                class="footer-logo"
              />
              <h1 class="bold-xxl t-dark-blue font-family-1 t-dark">
                The Pets' Concept
              </h1>
            </div>
          </div>
          <div class="social-container d-flex-row flex-5 justify-end">
            <a
              href="https://www.instagram.com/the_pets_concept/"
              target="_blank"
              referrerpolicy="no-referrer"
              rel="no-referrer"
            >
              <Icon name="jam:instagram" class="t-dark-blue" size="22" />
            </a>
            <a
              href="https://www.facebook.com/Petsconcept11/"
              target="_blank"
              referrerpolicy="no-referrer"
              rel="no-referrer"
            >
              <Icon name="jam:facebook-circle" class="t-dark-blue" size="22" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=923068999918&text=Hello%2C+I+want+to+connect%21&type=phone_number&app_absent=0"
              target="_blank"
              referrerpolicy="no-referrer"
              rel="no-referrer"
            >
              <Icon name="jam:whatsapp" class="t-dark-blue" size="22" />
            </a>
          </div>
        </div>
        <div class="d-flex-row space-between">
          <div class="flex-5 bar"></div>
          <Icon
            name="tabler:square-rounded-chevrons-up-filled"
            size="25"
            class="t-dark-blue cursor-pointer"
          />
          <div class="flex-5 bar"></div>
        </div>
      </div>

      <div class="d-flex-row space-between md-row-to-col">
        <div class="d-flex-column flex-5 gap-5 justify-start align-start">
          <p class="t-dark regular-m font-family-2">
            Professional Pet Care and Grooming Services
          </p>
          <p class="t-dark regular-m font-family-2">
            Lahore, Punjab ⸺ Pakistan
          </p>
        </div>
        <div class="d-flex-row flex-5 gap-18 justify-end">
          <NuxtLink to="/" class="font-family-2 medium-m t-dark">Home</NuxtLink>
          <NuxtLink to="/" class="font-family-2 medium-m t-dark">About</NuxtLink>
          <NuxtLink to="/" class="font-family-2 medium-m t-dark"
            >Services</NuxtLink
          >
          <NuxtLink to="/" class="font-family-2 medium-m t-dark"
            >Contact</NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
