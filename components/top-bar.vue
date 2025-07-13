<template>
  <div class="page-wrapper">
    <img
      v-if="loaded"
      class="gradient animate__animated animate__fadeIn"
      src="/images/gradient.png"
      width="1920"
      height="650"
    />
    <div v-else class="skeleton"></div>
    <h1 class="hidden">Loft Hall</h1>
    <div class="topbar">
      <div class="topbar__left">
        <img
          :src="logo"
          alt="Loft Hall Logo"
          width="61"
          height="61"
          class="animate__animated animate__fadeIn"
        />
        <NavMenu class="animate__animated animate__fadeInLeft" />
      </div>
      <div class="topbar__right animate__animated animate__fadeInRight">
        <span>+7 495 120-19-05</span>
        <BaseButton variant="big">Перезвоните мне</BaseButton>
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

.skeleton {
  width: 1920px;
  position: absolute;
  height: 650px;
  background-color: #000;
  z-index: -1;
}

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
    animation: fadeInDown 2s;
  }
}
</style>

<script setup>
import logo from "~/assets/images/logo.svg";

const loaded = ref(false);

onMounted(() => {
  const img = new Image();
  img.src = logo;
  img.onload = () => {
    loaded.value = true;
  };
});
</script>
