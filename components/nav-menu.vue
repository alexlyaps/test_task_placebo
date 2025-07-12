<template>
  <ul class="nav-menu">
    <li
      v-for="(item, index) of menuCities"
      :key="`city-${index}`"
      class="cities"
      @click="activeCity = item"
    >
      <NuxtLink to="/">
        <span :class="{ active: activeCity === item }">{{ item }}</span>
      </NuxtLink>
    </li>

    <li class="separator"></li>

    <li v-for="(item, index) of menuItems" :key="`item-${index}`" class="items">
      <NuxtLink to="#">
        <span>{{ item }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const menuCities = ["Москва", "Санкт-Петербург", "Подмосковье"];
const menuItems = [
  "Лофты",
  "Залы",
  "Мероприятия",
  "Внутри",
  "Кейтеринг",
  "О нас",
  "Журнал",
  "Контакты",
];

const activeCity = ref("Москва");
</script>

<style>
.nav-menu {
  margin-top: 34px;
}

.items span:hover {
  font-weight: 600;
}

.cities span {
  color: #5b5b5b;
  position: relative;
  cursor: pointer;
}

.cities span:hover,
.cities span.active {
  color: #fff;
}

.cities span.active::before {
  content: "";
  position: absolute;
  left: -10px;
  top: calc(50% - 2px);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #fff;
  display: inline-block;
  margin-right: 8px;
}

.separator {
  height: 22px;
}
</style>
