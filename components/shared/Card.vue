<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  border-radius: 24px;
  background-color: rgba(var(--background-color-card));
  border: 1px solid rgba(var(--border-color-card));
  backdrop-filter: blur(5px);
  width: 474px;
  padding: 24px;
  margin: 0 10px;
}

@media screen and (max-width: 992px) {
  .card {
    margin: 0 0 24px 0;
  }
}

@media screen and (max-width: 576px) {
  .card {
    width: 100%;
    padding: 24px 16px;
  }
}
</style>