<template>
  <div class="offer-card-details">
    <ul class="offer-list">
      <li class="offer-list__item">
        <Icon class="offer-list__item-icon" name="game-icons:round-star" size="24"/>
        <p class="offer-list__item-text">Exclusive access to <span class="offer-list__item-text--highlight">350+</span> learning programs</p>
      </li>
      <li class="offer-list__item">
        <Icon class="offer-list__item-icon" name="game-icons:round-star" size="24"/>
        <p class="offer-list__item-text">Personalized course plan</p>
      </li>
      <li class="offer-list__item">
        <Icon class="offer-list__item-icon" name="game-icons:round-star" size="24"/>
        <p class="offer-list__item-text">Comfy learning schedule made by you</p>
      </li>
      <li class="offer-list__item">
        <Icon class="offer-list__item-icon" name="game-icons:round-star" size="24"/>
        <p class="offer-list__item-text"><span class="offer-list__item-text--highlight">24/7</span> tutor support in a secure chat</p>
      </li>
      <li class="offer-list__item">
        <Icon class="offer-list__item-icon" name="game-icons:round-star" size="24"/>
        <p class="offer-list__item-text">Lifetime access to materials</p>
      </li>
    </ul>

    <div class="offer-secure-label">
      <Icon
          class="offer-secure-label__icon"
          name="icon-park-outline:lock-one"
          size="24"
      />
      Safe & secure payment
    </div>

    <p class="offer-payment-details">$0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period,
      you will automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time.
      By continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy Policy ,
      Money Back , and Subscription Terms .
    </p>
  </div>
</template>

<style scoped lang="scss">
.offer-card-details {
  display: block;
}

.offer-list {
  margin-bottom: 24px;

  &__item {
    display: flex;
    list-style: none;
    font-weight: 400;
    margin-bottom: 16px;

    &-icon {
      color: rgb(var(--icon-color));
      margin-right: 10px;
      flex-shrink: 0;
    }

    &-text {
      color: rgb(var(--text-color-primary));
      margin: auto 0;

      &--highlight {
        color: rgb(var(--text-color-text-highlight));
        font-weight: 700;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.offer-secure-label {
  font-weight: 600;
  text-align: center;
  color: rgb(var(--text-color-label));
  background-color: rgba(var(--background-color-label));
  border: 1px solid rgba(var(--border-color-label));
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;

  &__icon {
    margin-right: 8px;
  }
}

.offer-payment-details {
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: rgba(var(--text-color-primary), 0.6);
}
</style>
