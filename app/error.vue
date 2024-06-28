<template>
  <NuxtLayout>
    <section>
      <h1 class="text-4xl mb-4">Oops {{ (error as any).statusCode }}</h1>
      <h2 class="text-xl text-gray-500 dark:text-gray-400">
        {{ (error as any).statusMessage }}
      </h2>
    </section>
  </NuxtLayout>
</template>

<script lang="ts" setup>
defineProps({ error: Object });
</script>
