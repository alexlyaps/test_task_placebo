<template>
  <TopBar />
  <Halls class="animate__animated animate__fadeIn" />
  <Cta />
  <FooterComp />
</template>

<style lang="scss">
@use "~/assets/scss/main.scss";
</style>

<script>
import "modern-normalize";
import "animate.css";
import { useHead } from "#app";

useHead({
  meta: [{ name: "description", content: "Loft Hall by Placebo" }],
});
</script>
