<template>
  <div class="input-wrapper" :class="statusClasses">
    <label v-if="label" class="input-label"> {{ label }} </label>
    <input
        :value="value"
        :type="type"
        :maxlength="maxlength"
        :inputmode="inputmode"
        :placeholder="placeholder"
        @input="onInput"
        @keydown="$emit('keydown', $event)"
    />
        <span v-if="showError" class="input-error">
            {{ errors[0] }}
        </span>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    required: true
  },

  type: {
    type: String,
    required: false,
    default: 'text'
  },

  inputmode: {
    type: String,
    required: false,
    default: 'text'
  },

  label: {
    type: String,
    required: false,
    default: ''
  },

  placeholder: {
    type: String,
    required: false,
    default: ''
  },

  maxlength: {
    type: Number,
    required: false,
    default: 150
  },

  errors: {
    type: Array,
    required: false,
    default: []
  }
});

const inputValue = ref('');

const emit = defineEmits(['update', 'keydown']);

const onInput = (event: { target: HTMLInputElement; }) => {
  inputValue.value = event.target.value;

  emit('update', (event.target as HTMLInputElement).value);
}

const showError = computed(() => !!props.errors?.length);
const statusClasses = computed(() => ({
  'input-wrapper--success': !props.errors.length && inputValue.value.length,
  'input-wrapper--error': props.errors.length
}));
</script>

<style scoped lang="scss">
.input-wrapper {
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 8px;
  border: 1px solid rgb(var(--border-color));
  color: rgb(var(--text-color-filed));
  background-color: rgba(var(--background-color-field));
  padding: 0 12px;

  & input {
    width: 100%;
    background-color: rgba(var(--background-color-field));
  }

  &--success {
    border: 1px solid rgb(var(--border-color-success));
  }

  &--error {
    border: 1px solid rgb(var(--border-color-error));
  }
}

.input-label {
  position: absolute;
  top: -6px;
  font-weight: 700;
  font-size: 12px;
  border-radius: 6px;
  color: rgb(var(--text-color-primary));
  background-color: rgba(var(--background-color-field));
  line-height: 1;
  padding: 0 6px;
}

.input-error {
  color: rgb(var(--text-color-error));
  font-size: 12px;
  min-width: fit-content;
  margin-right: 8px;
}
</style>