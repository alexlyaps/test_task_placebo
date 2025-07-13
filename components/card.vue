<template>
  <div class="card-wrapper">
    <div class="card">
      <img
        class="card__image"
        :src="`/images/${name}.jpg`"
        width="390"
        height="390"
        :alt="`Image of ${name} Hall`"
        loading="lazy"
      />
      <h2 class="card__name">{{ name }} Hall</h2>
      <div class="card__badges">
        <Badge>800 м²</Badge>
        <Badge>200-400 персон</Badge>
        <Badge>м.Павелецкая</Badge>
      </div>
      <div class="hidden-text">
        <p>
          Первоклассный сервис, изысканная кухня, стильные интерьеры и полное
          техническое оснаис, изысканная кухня, стильные интерьеры и полное
          техническое оснащение
        </p>
        <p>
          Первоклассный сервис, изысканная кухня, стильные интерьеры и полное
          техническое оснащение
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as *;
@use "animate.css/animate";

.card-wrapper {
  width: 390px;
  height: 480px;
  overflow: hidden;
  border-top-right-radius: 21px;
  border-top-left-radius: 21px;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 480px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-152px);
  }

  .card__image {
    border-radius: 21px;
    width: 390px;
    height: 390px;
  }

  .card__name {
    margin-top: 28px;
    font-size: 22px;
    font-weight: 500;
  }

  .card__badges {
    margin-top: 10px;
    display: flex;
    gap: 4px;
  }

  .hidden-text {
    margin: 20px 16px 7px 16px;
    color: #c7c7c7;
    width: 320px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
}
</style>
