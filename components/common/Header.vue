<template>
  <header class="header">
    <slot />
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & :deep(img) {
    width: 180px;
    height: 40px;
    margin-left: 135px;
  }
}

@media screen and (max-width: 992px) {
  .header {
    margin-bottom: 24px;
  }
}

@media screen and (max-width: 576px) {
  .header {
    & :deep(img) {
      margin-left: 0;
    }
  }
}
</style>