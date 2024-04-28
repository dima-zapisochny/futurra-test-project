<template>
  <slot />
</template>

<script setup>
useHead({
  titleTemplate: (chunk) => (chunk ? `Offer Page | ${chunk}` : 'Offer Page'),
  meta: [
    {
      name: 'description',
      content: 'My test project description',
    },
    {
      property: 'og:description',
      content: 'My test project description',
    },
    {
      property: 'og:title',
      content: 'Test Project',
    },
    {
      property: 'og:type',
      content: 'website',
    }
  ],
})
</script>