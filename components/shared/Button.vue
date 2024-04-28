<template>
  <button
      :class="buttonClasses"
      :type="props.type"
   >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  skin: {
    type: String,
    required: true
  },

  type: {
    type: String as () => "button" | "submit" | "reset",
    required: false,
    default: 'button'
  }
});

const buttonClasses = computed(() => `button--${props.skin}`);
</script>

<style scoped>
.button--primary {
  background-color: rgb(var(--button-color-primary));
  color: rgb(var(--text-color-button));

  &:disabled {
    background-color: rgb(var(--background-color-disabled));
  }
}

.button--secondary {
  background-color: rgb(var(--button-color-secondary));
  color: rgb(var(--text-color-submit-button));

  &:disabled {
    background-color: rgb(var(--background-color-disabled));
  }
}

@media screen and (max-width: 992px) {
  button {
    width: 100%;
  }
}
</style>