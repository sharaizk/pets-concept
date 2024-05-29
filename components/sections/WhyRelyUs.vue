<template>
    <div class="why_rely_us_section">
        <NuxtImg src="/images/home/wings.svg" alt="wings-image" class="wings-image" />

        <div class="d-flex-column justify-start gap-60 common_section_container">
            <h2 class="title-h2 font-family-1 t-dark text-center">Why rely on us?</h2>
            <div class="reasons-container">
                <div class="d-flex-row space-between align-start gap-0 reason_item" v-for="reason in reasons"
                    :key="reason">
                    <div class="d-flex-row flex-1 justify-start reason_icon align-start">
                        <NuxtImg src="/images/home/dog-paw.svg" alt="dog-paw" class="dog-paw" />
                    </div>
                    <div class="d-flex-column justify-start align-start reason_desc flex-9">
                        <h5 class="t-dark title-h5 f-w-500 font-family-2">{{ reason.question }}</h5>
                        <p class="regular-l font-family-1">{{ reason.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const reasons = [
    {
        question: "We love animals",
        answer: 'We understand that your furry friend is a treasured member of your family and deserves the best care and attention possible.'
    },
    {
        question: "Peace of mind",
        answer: "We know that leaving your furry friend can be stressful, and you want to ensure that they are receiving the best care while you're away."
    },
    {
        question: "Convenience",
        answer: "In addition to our convenient appointment times, we also offer online booking for easy scheduling."
    },
    {
        question: "Transperency",
        answer: "We want you to feel confident in the care we provide and trust that we have your dog's best interests at heart."
    },
    {
        question: "Personalized care",
        answer: "Our team of trained professionals is dedicated to providing personalized care for every dog that comes through our doors."
    },
    {
        question: "Teamwork",
        answer: "Our team of vets, technicians, and other pet care professionals work together to ensure that your dog receives the best possible care."
    }
]
</script>