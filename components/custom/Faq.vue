<template>
  <div class="faq_component" ref="parentRef" @click="handleToggle">
    <div class="question_container">
      <Icon name="ph:caret-right-fill" size="16" />
      <p class="regular-l f-w-600 font-family-2">{{ question }}</p>
    </div>

    <transition
      name="accordion"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <p
        class="regular-m f-w-300 font-family-2 answer_text"
        ref="answerContainer"
        v-show="isOpen"
      >
        {{ answer }}
      </p>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const parentRef = ref(null);
const questionContainer = ref(null);
const answerContainer = ref(null);
defineProps({
  question: {
    default: "",
  },
  answer: {
    default: "",
  },
});

const handleToggle = (prompt) => {
  isOpen.value = !isOpen.value;
};
function beforeEnter(el) {
  el.style.height = "0";
}

function enter(el) {
  el.style.height = el.scrollHeight + "px";
}
function beforeLeave(el) {
  el.style.height = el.scrollHeight + "px";
}

function leave(el) {
  el.style.height = "0";
}
</script>
