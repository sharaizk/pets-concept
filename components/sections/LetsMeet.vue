<template>
  <div class="d-flex-column lets-meet-section common_section_container">
    <div class="d-flex-column gap-10">
      <p class="t-dark font-family-1 f-w-700 title-h2 text-align-center">
        Let's Meet
      </p>
    </div>
    <div class="lets_meet_map_container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3403.2034221981366!2d74.3027935!3d31.4635899!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015c83987813%3A0x99037b9d9dc88c97!2sThe%20Pets&#39;%20Concept%20(Pets%20Clinic)!5e0!3m2!1sen!2sfr!4v1717833967003!5m2!1sen!2sfr"
        height="350"
        class="lets_meet_iframe"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="d-flex-column location_container">
      <div class="d-flex-row space-between gap-20 md-row-to-col location_detail_container">
        <!-- FIRST -->
        <div class="d-flex-row space-between align-start gap-10 flex-3">
          <div class="d-flex-row flex-2 align-start">
            <LocationIcon />
          </div>
          <div class="d-flex-column justify-start align-start flex-8">
            <h3 class="t-dark font-family-1 title-h3">{{ location.city }}</h3>
            <p class="t-dark regular-s font-family-2">{{ location.address }}</p>
            <a
              class="font-family-1 bold-s t-blue d-flex-row justify-start gap-0"
              >Get Direction <Icon name="lucide:chevrons-right" size="15"
            /></a>
          </div>
        </div>

        <div class="d-flex-row gap-10 flex-3">
          <ContactIcon />
          <p class="t-dark bold-s font-family-2">{{ location.number }}</p>
        </div>

        <div class="d-flex-column justify-start align-start gap-10 flex-3">
          <h3 class="t-dark font-family-1 title-h3">Hours</h3>
          <div class="d-flex-row justify-start gap-30">
            <p class="t-dark font-family-2 medium-l">Sun</p>
            <p class="t-dark regular-s font-family-2">
              {{ location.hoursSun }}
            </p>
          </div>
          <div class="d-flex-row justify-start gap-30">
            <p class="t-dark font-family-2 medium-l">Mon-Sat</p>
            <p class="t-dark regular-s font-family-2">
              {{ location.hoursOther }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import LocationIcon from "../icons/LocationIcon.vue";
import ContactIcon from "../icons/ContactIcon.vue";
const location = ref({
  city: "Lahore",
  address: "17-B1 College Road, Sector B-1 Block A 1 Phase 1 Johar Town",
  number: "+92 306 8999918",
  hoursSun: "1:30pm – 10pm",
  hoursOther: "11:30am – 10pm",
});
</script>
