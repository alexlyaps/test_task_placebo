<template>
  <span :class="['badge']">
    <slot />
  </span>
</template>

<style scoped lang="scss">
// базовый стиль
.badge {
  height: 24px;
  color: #d9d9d9;
  background-color: rgb(255, 255, 255, 0.16);
  border-radius: 6px;
  padding: 2px 12px;
}
</style>
