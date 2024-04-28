<template>
  <div class="select-wrapper">
    <div class="select" :class="{ 'select--active': showOptions }">
      <label v-if="label" class="select__label"> {{ label }}</label>
      <div class="select__field" @click="showOptions = !showOptions">
        {{ selectedOption }}
        <Icon name="material-symbols:keyboard-arrow-down" color="#6C727F" size="26"/>
      </div>
    </div>

    <div class="select-dropdown" :class="{ 'select-dropdown--hide': !showOptions }">
      <ul>
        <li
            v-for="(option) of options"
            :key="option"
            class="select-option"
            :class="{ 'selected-option': selectedOption === option }"
            @click="selectOption(option)"
        >
          {{ option }}
          <Icon v-if="selectedOption === option" name="ion:checkmark" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: false,
    default: ''
  },

  options: {
    type: Array,
    required: true,
  },

  defaultOption: {
    type: String,
    required: false,
    default: 'Select',
  }
})

const emit = defineEmits(['update']);

const selectedOption = ref(props.defaultOption);
const showOptions = ref(false)

const selectOption = (option) => {
  selectedOption.value = option;
  showOptions.value = false;

  emit('update', option);
}
</script>

<style scoped lang="scss">
.select-wrapper {
  width: 100%;
  position: relative;
  text-align: left;
  outline: none;
  height: 46px;
  line-height: 46px;
}

.select {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--background-color-field));
  border-radius: 8px;
  border: 1px solid rgb(var(--border-color));
  color: rgb(var(--text-color-filed));
  padding: 0 12px;

  &__label {
    position: absolute;
    top: -6px;
    font-weight: 700;
    font-size: 12px;
    color: rgb(var(--text-color-primary));
    line-height: 1;
    padding: 0 6px;
    border-radius: 8px;
    background-color: rgba(var(--background-color-field));
  }

  &--active {
    border: 1px solid rgb(var(--border-color-active));
    border-radius: 8px 8px 0 0;
  }
}

.select__field {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 12px;
}

.select-dropdown {
  height: 250px;
  border: solid rgb(var(--border-color));
  border-width: 0 1px 1px 1px;
  border-radius: 0 0 6px 6px;
  background-color: rgba(var(--background-color-field));
  overflow-y: scroll;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;

  &--hide {
    display: none;
  }
}

.select-option {
  color: rgb(var(--text-color-filed));
  padding: 0 12px;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  border: solid rgb(var(--border-color));
  border-width: 0 0 1px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  &:last-child {
    border-width: 0;
  }

  &:hover {
    color: rgb(var(--text-color-secondary));
    background-color: rgb(var(--background-color-active));
  }

  &.selected-option {
    color: rgb(var(--text-color-secondary));
    background-color: rgb(var(--background-color-active));
  }
}
</style>
