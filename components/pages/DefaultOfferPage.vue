<template>
  <div class="offer-page">
    <Header>
      <NuxtImg
          format="webp"
          alt="Logo"
          src="/images/planet-logo.png"
      />
    </Header>

    <section class="main-section">
      <div class="learning-journey">
        <h1 class="learning-journey__title">Start your learning journey now.</h1>
        <p class="learning-journey__description">Get a
          <span class="font-extrabold">
            <span class="text-color-highlighted-primary">Planet
            </span>Learn
          </span> plan to rock self-learning
        </p>

        <Button skin="primary" @click="showPaymentPopup = true">
          Get my plan
        </Button>
      </div>

      <NuxtImg
          class="img-decoration img-decoration--asteroid"
          width="200"
          height="80"
          format="webp"
          alt="Asteroid decoration"
          src="/images/asteroid.png"
      />

      <OfferCard />

      <OfferCardDetails class="offer-details"/>

      <PaymentPopup
          v-show="showPaymentPopup"
          @close-modal="showPaymentPopup = false"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/shared';
import { OfferCard, OfferCardDetails } from '@/components/offer/card';
import { PaymentPopup } from '@/components/offer/payment';
import { Header } from '@/components/common';

useSeoMeta({
  title: 'Default',
});

useHead({
  link: [{ rel: 'stylesheet', href: '/styles/variables/offer-page.css' }]
})

const showPaymentPopup = ref(false);
</script>

<style scoped lang="scss">
.offer-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url("/images/planets.png");
  box-shadow: inset 0 0 0 2000px rgba(255, 255, 255, 0.95);
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
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  &__description {
    width: 300px;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 32px;
    color: rgb(var(--text-color-primary));
  }
}

.learning-journey__description {
  width: 300px;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
}

.img-decoration {
  position: absolute;
  z-index: 1;

  &--asteroid {
    right: 20px;
    top: -55px;
  }
}

.offer-details {
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
    margin-bottom: 32px;
  }

  .img-decoration {
    display: none;
  }

  .offer-details {
    display: block;
    width: 474px;
    order: 3;
  }
}

@media screen and (max-width: 576px) {
  .offer-page{
    padding: 20px;
  }

  .learning-journey {
    width: 100%;

    &__title {
      font-size: 32px;
      margin-bottom: 16px;
    }
  }

  .offer-details {
    display: block;
    width: 100%;
    order: 3;
  }
}
</style>