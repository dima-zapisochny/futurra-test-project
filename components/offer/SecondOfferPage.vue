<template>
  <div class="offer-page">
    <Header>
      <img src="/images/box-logo.png" alt="Logo" />
    </Header>

    <section class="main-section">
      <div class="learning-journey learning-journey--desktop">
        <h1 class="learning-journey__title"><span style="color: #4EAAFF">START</span> YOUR LEARNING JOURNEY <span style="color: #4EAAFF">NOW</span></h1>
        <p class="learning-journey__description">Get a <span style="font-weight: 800"><span style="color: #4EAAFF">Smart</span>Learn</span> plan to rock self-learning.</p>
        <Button skin="primary" @click="showPaymentPopup = true">
          Get my plan
        </Button>
      </div>

      <img class="img-decoration img-decoration--ball" alt="Ball decoration" src="/images/ball.png">
      <img class="img-decoration img-decoration--rocket" alt="Rocket decoration"  src="/images/rocket.png">

      <OfferCard />

      <Card class="offer-card">
        <div class="learning-journey">
          <h1 class="learning-journey__title"><span style="color: #4EAAFF">START</span> YOUR LEARNING JOURNEY <span style="color: #4EAAFF">NOW</span></h1>
          <p class="learning-journey__description">Get a <span style="font-weight: 800"><span style="color: #4EAAFF">Smart</span>Learn</span> plan to rock self-learning.</p>
          <Button skin="primary" @click="showPaymentPopup = true">
            Get my plan
          </Button>
        </div>

        <OfferCardDetails />
      </Card>

      <PaymentPopup
          v-show="showPaymentPopup"
          @close-modal="showPaymentPopup = false"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button, Card } from '@/components/shared';
import { OfferCard, OfferCardDetails } from '@/components/offer/card';
import { PaymentPopup } from '@/components/offer/payment';
import Header from './Header.vue';

useHead({
  title: 'Offer Page | Second',
  link: [{ rel: 'stylesheet', href: '/styles/variables/second-offer-page.css' }]
})

const showPaymentPopup = ref(false);
</script>

<style scoped lang="scss">
.offer-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url("/images/second-planets.png");
  background-size: cover;
}

.main-section {
  position: relative;
  margin: auto;
  display: flex;
  justify-content: center;
}

.learning-journey {
  width: 474px;
  margin: 16px 10px;

  &__title {
    color: rgb(var(--text-color-primary));
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  &__description {
    width: 300px;
    color: rgb(var(--text-color-primary));
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 32px;
  }
}

.img-decoration {
  position: absolute;

  &--ball {
    width: 86px;
    height: 86px;
    right: 440px;
    top: -40px;
  }

  &--rocket {
    top: 80px;
    right: -170px;
    z-index: 1;
  }
}

.offer-card {
  display: none;
}

@media screen and (max-width: 992px) {
  .offer-page {
    padding: 24px;
  }

  .header {
    margin-bottom: 24px;
  }

  .main-section {
    margin: 0;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .learning-journey {
    order: 2;
    margin: 0 0 32px 0;
    width: 100%;

    &--desktop {
      display: none;
    }
  }

  .img-decoration {
    display: none;
  }

  .offer-card {
    display: block;
    width: 474px;
    order: 3;
  }
}

@media screen and (max-width: 576px) {
  .offer-page{
    padding: 20px;
    height: 100%;
  }

  .learning-journey {
    &__title {
      font-size: 32px;
      margin-bottom: 16px;
    }
  }

  .offer-card {
    display: block;
    width: 100%;
    order: 3;
  }
}
</style>