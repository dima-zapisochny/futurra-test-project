<template>
  <header class="header">
    <slot />
  </header>
</template>

<style lang="scss">
.header {
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & img {
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
    & img {
      margin-left: 0;
    }
  }
}
</style>