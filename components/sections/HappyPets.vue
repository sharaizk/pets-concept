<template>
  <section class="happy_pets_section common_section_container">
    <div class="d-flex-row flex-5">
      <NuxtImg
        src="/images/home/happy-pets.webp"
        alt="happ-pets"
        quality="100"
        class="happy-pets-image"
      />
    </div>
    <div class="d-flex-column flex-5">
      <div class="d-flex-column justify-start align-center gap-0">
        <NuxtImg
          src="/images/home/dog.svg"
          alt="happ-pets-dog"
          quality="100"
          class="happy-pets-dog-image"
        />

        <NuxtImg
          src="/images/home/our_promise.webp"
          alt="our-promise-dog"
          quality="100"
          class="our-promise-image"
        />
      </div>
      <div class="d-flex-column gap-24">
        <h2 class="title-h1 font-family-1 t-dark text-center">
          Happy pets,<br />Happy humans
        </h2>
        <div class="d-flex-column gap-10">
          <p class="font-family-2 t-dark regular-s text-center f-w-200">
            Ensuring the well-being of your beloved pets is our top priority.
            Our approach is rooted in compassion and expertise, starting with
            thorough examinations tailored to each pet's needs.
          </p>
          <p class="font-family-2 t-dark regular-s text-center f-w-200">
            We empower pet owners with preventive measures, dietary advice, and
            behavior management, fostering strong relationships built on trust
            and support.
          </p>
        </div>
        <NuxtLink
          to="/"
          class="font-family-2 t-dark regular-s text-center f-w-200 text-underline"
          >Learn more about us</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script setup></script>
