<template>
  <div class="fab-wrapper">
    <input
      id="fabCheckbox"
      type="checkbox"
      class="fab-checkbox"
      :checked="checked"
      @change.stop="onChange"
    />
    <label class="fab" for="fabCheckbox">
      <span class="fab-dots fab-dots-1"></span>
      <span class="fab-dots fab-dots-2"></span>
      <span class="fab-dots fab-dots-3"></span>
      <Icon
        name="heroicons:chat-bubble-left-right"
        size="30"
        class="chat-icon"
        color="white"
      />
    </label>
    <div class="fab-wheel">
      <a class="fab-action fab-action-1">
        <Icon name="logos:whatsapp-icon" size="25" />
      </a>
      <a class="fab-action fab-action-2">
        <Icon name="skill-icons:instagram" size="25" />
      </a>
      <a class="fab-action fab-action-3">
        <Icon name="material-symbols:call" size="25" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const checked = ref(false);

const onChange = (e) => {
  checked.value = e.target.checked;
};
</script>

<style>
@import "/assets/styles/modules/fab.scss";
</style>
