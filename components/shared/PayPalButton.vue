<template>
  <button class="paypal-button" @click="$emit('click', $event)">
    <Icon class="mr-1.5" name="logos:paypal" size="24px"/>
    BUY NOW
  </button>
</template>

<style scoped lang="scss">
.paypal-button {
  width: 100%;
  font-weight: 700;
  text-align: center;
  padding: 16px;
  color: #000000;
  background-color: #FEC538;
  transition: background-color 0.2s;

  &:hover {
    background-color:#FFDA80;
  }
}
</style>