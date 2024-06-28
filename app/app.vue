<template>
  <!-- <NuxtLayout :name="layout"> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<!-- <script setup>
const layout = 'another';
</script> -->

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);

  /* opacity: 0.5;
  filter: grayscale(1); */
}
</style>
