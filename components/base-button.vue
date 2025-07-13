<template>
  <button :class="['btn', variantClass]">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: "big" | "rounded" | "small" | "tiny" | "text";
}>();

const variantClass = `btn--${props.variant || "small"}`;
</script>

<style scoped lang="scss">
// базовый стиль
.btn {
  padding: 0 1.5rem;
  border-radius: 10px;
  font-weight: 500;
  transition: 0.2s ease-in-out;
  height: 36px;
  border: none;
  cursor: pointer;
}

// варианты
.btn--big {
  background-color: #ffffff;
  color: #000000;
  height: 36px;

  &:hover {
    background-color: #000;
    color: #fff;
  }
}

.btn--rounded {
  color: #fff;
  background-color: #000;
  border: 1px solid #333333;
  border-radius: 18px;

  &:hover {
    background-color: #fff;
    color: #000;
  }
}

.btn--small {
  padding: 0 0.5rem;
  color: #fff;
  background-color: #000;
  border: 1px solid #333333;
  border-radius: 9px;
  height: 28px;
  margin-right: 10px;

  &:hover {
    background-color: #fff;
    color: #000;
  }
}

.btn--tiny {
  padding: 0 0.5rem;
  color: #fff;
  font-size: 12px;
  background-color: #000;
  border: 1px solid #333333;
  border-radius: 8px;
  height: 26px;
  margin-right: 10px;

  &:hover {
    background-color: #fff;
    color: #000;
  }
}

.btn--text {
  color: #fff;
  border: none;
  background-color: transparent;
  height: 28px;
  font-size: 14px;
  transition: all 0.3 ease-in-out;

  &:hover {
    font-weight: 600;
  }
}
</style>
