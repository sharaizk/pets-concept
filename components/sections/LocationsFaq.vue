<template>
  <div class="d-flex-column locations-faq-section common_section_container">
    <div class="d-flex-column gap-10">
      <div class="d-flex-row gap-5">
        <FaqIcon />
        <h6 class="t-dark font-family-2 f-w-500 medium-m">FAQs</h6>
      </div>

      <div class="d-flex-column gap-0">
        <p class="t-dark font-family-1 f-w-700 title-h2 text-align-center">
          Got <span class="t-blue">a</span> Question?
        </p>
        <p class="t-dark font-family-1 f-w-700 title-h2 text-align-center">
          We have <span class="t-blue">Answers</span>!
        </p>
      </div>
    </div>
    <div class="d-flex-row md-row-to-col center gap-0">
      <NuxtImg
        src="/images/home/faq-image.webp"
        alt="faq_location_image"
        class="faq_location_image"
        fit="cover"
      />
      <div class="d-flex-column justify-start align-start flex-5">
        <Faq
          v-for="faq in faqs"
          :key="faq.id"
          :question="faq.question"
          :answer="faq.answer"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import LocationIcon from "../icons/LocationIcon.vue";
import Faq from "../custom/Faq.vue";
import FaqIcon from "../icons/FaqIcon.vue";
const faqs = [
  {
    id: 1,
    question: "What time can I drop off and pick up my pet?",
    answer:
      "To follow all required SOPs we like all pets drop off by 11am. Please call ahead to inquire about discharge.",
  },
  {
    id: 2,
    question: "What should i bring with my pet?",
    answer:
      "Always bring your vet card, medical history and your jet box with pet",
  },
  {
    id: 3,
    question: "What does my pet do all day?",
    answer:
      "A healthy pet is a happy pet and daily exercise promotes weight control, keeping your pet limber and agile and aiding in the relief of digestive problems!",
  },
  {
    id: 4,
    question: "How old does my pet have to be for vaccination?",
    answer:
      "For all pet, most vaccines require the animal to be at least 3 months old. The reason for this is because it require incoming animals to have had their first round of adult shots at 12 weeks, followed by the second round at about 16 weeks.",
  },
];
</script>
