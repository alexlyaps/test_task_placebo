<template>
  <div class="cta-wrapper">
    <div class="cta">
      <h3 class="cta__heading">Новогодний корпоратив</h3>
      <p class="cta__text">
        Стильные залы с декором и крафтовой мебелью. Качественный звук,
        авторская кухня, нет «пробки»
      </p>
      <BaseButton class="cta__button" variant="text">Подробнее →</BaseButton>
    </div>
    <div class="cta__decoration"></div>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as *;

.cta-wrapper {
  position: relative;
}

.cta {
  position: relative;
  width: 1200px;
  border-radius: 20px;
  padding: 32px 42px;
  background-color: #151b63;
  margin: 182px auto 111px auto;
  overflow: hidden;

  .cta__heading {
    color: $white;
    font-size: 22px;
    font-weight: 500;
    text-align: left;
    margin: 0;
    margin-bottom: 15px;
  }

  .cta__text {
    margin: 0;
    font-size: 14px;
    color: $white;
    opacity: 0.75;
  }

  .cta__button {
    position: absolute;
    bottom: 32px;
    right: 32px;
  }
}

.cta::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -175%;
  width: 110%;
  height: 200%;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0) 70%
  );
  transform: rotateX(-20deg);
}

.cta:hover::before {
  animation: shine 2s forwards;
}

@keyframes shine {
  0% {
    left: -75%;
  }
  100% {
    left: 115%;
  }
}

.cta__decoration {
  position: absolute;
  top: 8px;
  left: calc(50% - 1180px / 2);
  width: 1180px;
  height: 117px;
  border-radius: 20px;
  background-color: #0c0f3a;
  z-index: -1;
}
</style>
