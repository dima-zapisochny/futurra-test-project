<template>
<Modal>
  <template #header>
    <slot name="header">
      <h4 class="payment-popup__title">Payment method</h4>
    </slot>
  </template>

  <template #body>
    <slot name="body">
      <PayPalButton class="mb-4" />

      <GooglePayButton class="mb-4" />

      <Divider class="mb-4">OR</Divider>

      <PaymentForm class="mb-3"/>
    </slot>
  </template>
</Modal>
</template>

<script setup lang="ts">
import { Modal, GooglePayButton, PayPalButton, Divider } from '@/components/shared';
import PaymentForm from './PaymentForm.vue';
</script>

<style scoped lang="scss">
.payment-popup__title {
  font-weight: 800;
  margin-bottom: 24px;
  color: rgb(var(--text-color-primary))
}
</style>