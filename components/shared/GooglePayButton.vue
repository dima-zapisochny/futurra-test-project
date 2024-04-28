<template>
<button class="google-pay-button" @click="$emit('click', $event)">
  <Icon class="mr-1.5" name="logos:google-icon" size="24px"/>
  PAY
</button>
</template>

<style scoped lang="scss">
.google-pay-button {
  width: 100%;
  font-weight: 700;
  text-align: center;
  padding: 16px;
  border: 1px solid #E1E1E1;
  color: #000000;
  background-color: #FFFFFF;
  transition: all 0.2s;

  &:hover {
    color: #FFFFFF;
    background-color: #000000;
  }
}
</style>