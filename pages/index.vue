<template>
  <component :is="pageComponent" />
</template>

<script setup>
import { DefaultOfferPage, SecondOfferPage } from "@/components/pages";
import { PageVariants } from "@/enums";

const componentMapping = {
  [PageVariants.DEFAULT]: DefaultOfferPage,
  [PageVariants.SECOND]: SecondOfferPage
};

const route = useRoute();
const abtest = useCookie('abtest');

const pageVariant = ref('');
const pageComponent = computed(() => componentMapping[pageVariant.value]);

onMounted(() => {
  watch(() => route.query.abtest, (query) => {
    pageVariant.value = query in componentMapping ? query : abtest.value || PageVariants.DEFAULT;
  }, { immediate: true })
});
</script>