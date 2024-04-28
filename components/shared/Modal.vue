<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <header>
        <slot name="header" />
      </header>

      <slot name="body" />

      <footer id="footer">
        <slot name="footer" />

        <button @click="$emit('close-modal')">Close</button>
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 9999;
  background-color: rgba(var(--background-color-secondary), 0.6);
}

.modal {
  text-align: center;
  background-color: rgb(var(--background-color-modal));
  width: 400px;
  padding: 24px 16px;
  border-radius: 12px;
  z-index: 99999;
  box-shadow: 0 0 0 4px rgba(var(--box-shadow-color), 0.05);
  margin: auto;

  & button {
    width: auto;
    padding: 10px 16px;
    color: rgba(var(--button-color-primary), 0.4);
    background-color: transparent;
  }
}

@media screen and (max-width: 576px) {
  .modal {
    width: 90%;
  }
}
</style>