<template>
  <div class="page-wrapper">
    <img
      class="gradient"
      src="/images/gradient.png"
      width="1920"
      height="650"
    />
    <h1 class="hidden">Loft Hall</h1>
    <div class="topbar">
      <div class="topbar__left">
        <img :src="logo" alt="Loft Hall Logo" />
        <NavMenu />
      </div>
      <div class="topbar__right">
        <span>+7 495 120-19-05</span>
        <BaseButton>Перезвоните мне</BaseButton>
      </div>
    </div>
    <h3 class="heading">
      Первоклассный сервис, изысканная кухня, стильные интерьеры и полное
      техническое оснащение
    </h3>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as *;
@use "animate.css/animate";

.page-wrapper {
  position: relative;
  min-height: 650px;
  z-index: 0;
  padding: 32px 28px;

  .topbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
  }

  .topbar__right {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }

  .gradient {
    content: "";
    position: absolute;
    width: 1920px;
    height: 650px;
    top: -28px;
    left: 0px;
    z-index: -1;
    pointer-events: none;
  }

  .hidden {
    visibility: hidden;
    position: absolute;
  }

  .heading {
    position: absolute;
    top: 460px;
    left: calc((100vw - 300px) / 2);
    width: 300px;

    &:hover {
      animation: bounce 2s;
    }
  }
}
</style>

<script setup>
import logo from "~/assets/images/logo.svg";
</script>
