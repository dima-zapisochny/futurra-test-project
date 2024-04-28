<template>
  <div class="offer-card-price" :class="{ 'text-left': !isTimeOverCookie }">
    <p>3-day trial for <span>$0.99</span></p>
    <p>Then {{ price }}</p>
    <p v-if="!isTimeOverCookie">$39.99/week</p>
  </div>
</template>

<script setup>
const isTimeOverCookie = useCookie('isTimeOver');

const price = computed(() => isTimeOverCookie.value ? '$39.99/week' : '$9.99');
</script>

<style lang="scss" scoped>
.offer-card-price {
  p {
    &:nth-child(1) {
      color: rgb(var(--text-color-item-highlight));
      font-size: 24px;
      font-weight: 800;
      margin-bottom: 8px;

      & span {
        color: rgb(var(--text-color-text-highlight))
      }
    }
    
    &:nth-child(2) {
      color: rgb(var(--text-color-primary));
      font-size: 20px;
      font-weight: 600;
    }
    
    &:nth-child(3) {
      font-weight: 600;
      text-decoration: line-through;
      color: rgb(var(--text-color-grey));
    }
  }
}

@media screen and (max-width: 576px) {
  .offer-card-price {
    p {
      &:nth-child(1) {
        font-size: 18px;
      }

      &:nth-child(2) {
        font-size: 16px;
      }

      &:nth-child(3) {
        font-size: 14px;
      }
    }
  }
}
</style>
