<template>
  <div class="page-wrapper">
    <img
      class="gradient animate__animated animate__fadeIn"
      :src="`/images/gradient.png`"
      width="1920"
      height="650"
    />

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
    <div class="heading">
      <h2 class="heading__h2">Авторские event-пространства в москве</h2>
      <h3>
        Первоклассный сервис, изысканная кухня, <br />
        стильные интерьеры и полное техническое <br />
        оснащение
      </h3>
    </div>
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
  top: -28px;
  left: 0px;
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

  .heading__h2 {
    font-family: "Lithium";
    font-size: 53px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.01rem;
    margin-bottom: 1rem;
  }

  .heading {
    position: absolute;
    color: #c7c7c7;
    font-weight: normal;
    bottom: 130px;
    left: calc((100vw - 300px) / 2);
    width: 400px;
    animation: fadeInDown 2s;
  }
}
</style>

<script setup>
import logo from "~/assets/images/logo.svg";

// const loaded = ref(false);

// onMounted(() => {
//   const img = new Image();
//   img.src = "/images/gradient.png";
//   img.onload = () => {
//     loaded.value = true;
//   };
// });
</script>
