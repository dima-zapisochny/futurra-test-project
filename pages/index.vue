<template>
  <component :is="pageComponent" />
</template>

<script setup>
import { OfferPage, SecondOfferPage } from "@/components/offer";

const componentMapping = {
  'var1': OfferPage,
  'var2': SecondOfferPage
};

const route = useRoute();
const abtest = useCookie('abtest');

const pageVariant = ref('');
const pageComponent = computed(() => componentMapping[pageVariant.value]);

onMounted(() => {
  pageVariant.value = abtest.value || 'var1';

  watch(() => route.query.abtest, (query) => {
    if (query === 'var1' || query === 'var2') {
      pageVariant.value = query;
    }

  }, { immediate: true })
});
</script>