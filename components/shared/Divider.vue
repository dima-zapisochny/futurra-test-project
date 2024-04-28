<template>
  <span class="divider">
    <slot/>
  </span>
</template>

<style scoped lang="scss">
.divider {
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: rgb(var(--text-color-divider));

  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 2px solid rgb(var(--border-color));
  }

  &:not(:empty)::before {
    margin-right: .25em;
  }

  &:not(:empty)::after {
    margin-left: .25em;
  }
}
</style>