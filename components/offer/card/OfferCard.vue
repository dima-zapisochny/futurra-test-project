<template>
  <Card>
    <div class="offer-price">
      <OfferCardPrice />
      <Timer
          v-if="!isTimeOverCookie"
          :time="180"
          :critical-time="10"
      />
    </div>

    <OfferCardDetails class="offer-details" />
  </Card>
</template>

<script setup lang="ts">
import { Card, Timer } from "@/components/shared";
import OfferCardPrice from "./OfferCardPrice.vue";
import OfferCardDetails from "./OfferCardDetails.vue";

const isTimeOverCookie = useCookie('isTimeOver');
</script>

<style lang="scss" scoped>
.offer-price {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

@media screen and (max-width: 992px) {
  .offer-price {
    height: auto;
    justify-content: space-around;
    text-align: center;
    margin: 0;
  }

  .offer-details {
    display: none;
  }
}
</style>