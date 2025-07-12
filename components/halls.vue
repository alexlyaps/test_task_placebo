<template>
  <main class="halls">
    <h2>Залы в Москве</h2>
    <div class="halls__buttons">
      <div class="row">
        <BaseButton variant="rounded">До 100 персон</BaseButton>
        <BaseButton variant="rounded">До 500 персон</BaseButton>
        <BaseButton variant="rounded">Больше 500 персон</BaseButton>
        <BaseButton variant="rounded">Больше 500 персон</BaseButton>
      </div>
      <div class="row">
        <BaseButton variant="rounded">Для стильной свадьбы</BaseButton>
        <BaseButton variant="rounded">Масштабная конференция</BaseButton>
        <BaseButton variant="rounded">Масштабная конференция</BaseButton>
        <BaseButton variant="rounded">Масштабная конференция</BaseButton>
      </div>
    </div>
    <div class="halls__container">
      <Card name="Rockfeller" />
      <Card name="Grace" />
      <Card name="Montblanc" />
      <Card name="Rockfeller" />
      <Card name="Grace" />
      <Card name="Montblanc" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.halls {
  margin: 0 auto;
  margin-top: 40px;
  max-width: 1230px;
}

.row {
  display: flex;
  gap: 4px;
  margin-bottom: 7px;
}

h2 {
  margin-bottom: 14px;
}

.halls__container {
  display: flex;
  column-gap: 30px;
  row-gap: 56px;
  flex-wrap: wrap;
  margin-top: 42px;
}
</style>
