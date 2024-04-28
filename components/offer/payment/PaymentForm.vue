<template>
<form @submit.prevent>
  <InputField
      label="Card Number"
      class="mb-8"
      inputmode="numeric"
      placeholder="••••  ••••  ••••  ••••"
      :maxlength="maxLength.card"
      :value="formattedCard"
      :errors="errors.card"
      @update="(value) => onChange(value, 'card')"
      @keydown="onKeyPress"
  >
    <Icon class="shrink-0" name="logos:mastercard" width="32" height="22" />
  </InputField>

  <div class="credit-card-details mb-10">
    <Select
        label="Month"
        class="credit-card-details__item"
        :options="months"
        @update="(value) => onChange(value, 'month')"
    />

    <Select
        class="credit-card-details__item"
        label="Year"
        :options="years"
        @update="(value) => onChange(value, 'year')"
    />

    <InputField
        label="CVC"
        class="credit-card-details__item"
        inputmode="numeric"
        placeholder="•••"
        :maxlength="maxLength.cvc"
        :value="formattedCVC"
        :errors="errors.cvc"
        @update="(value) => onChange(value, 'cvc')"
        @keydown="onKeyPress"
    />
  </div>

  <Button skin="secondary" type="submit" :disabled="isSubmitButtonDisabled">Submit</Button>
</form>
</template>

<script setup lang="ts">
import { InputField, Select, Button } from '@/components/shared';

const maxLength = { card: 22 as number, cvc: 3 as number };
const years = [2020, 2021, 2022, 2023, 2024, 2026, 2027, 2028];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const formData = ref({
  card: '' as string,
  cvc: '' as string,
  year: '' as string,
  month: '' as string
});

const errors = ref({
  card: [] as string[],
  cvc: [] as string[]
});

const formattedCard: ComputedRef<string> = computed(() => {
  return formData.value.card
      .replace(/ /g, '')
      .replace(/(.{4})(?!$)/g, '$1  ');
});

const formattedCVC: ComputedRef<string> = computed(() => {
  return formData.value.cvc.replace(/\d/g, '•');
});

const isSubmitButtonDisabled: ComputedRef<boolean> = computed(() => {
  const hasErrors = Object.values(errors.value).some(errorArray => errorArray.length > 0);
  const hasEmptyFields = Object.values(formData.value).some(field => !field.toString().trim());

  return hasErrors || hasEmptyFields;
});

const onChange = (value: string, key: keyof typeof formData.value) => {
  formData.value[key] = value;

  if (key === 'cvc' || key === 'card') {
    validateNumbersLength(key);
  }
}

const onKeyPress = (event: KeyboardEvent): void => {
  if (!(event.key >= '0' && event.key <= '9' || event.key === 'Backspace')) {
    event.preventDefault();
  }
};

const validateNumbersLength = (key: keyof typeof errors.value | keyof typeof maxLength) => {
  if (formData.value[key].length && formData.value[key].length < maxLength[key]) {
    const errorMessage = key === 'card' ? 'Invalid number' : 'Invalid';

    errors.value[key].push(errorMessage);
  } else {
    errors.value[key] = [];
  }
}
</script>

<style scoped lang="scss">
.credit-card-details {
  display: flex;
  justify-content: space-between;

  &__item {
    width: 32%;
  }
}
</style>