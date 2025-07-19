<script setup>
  import { ref } from 'vue'
  const data = ref()

  const callback = (response) => {
    data.value = response
  }
</script>

<template>
  <div class="max-w-6xl m-auto">
    <div class="py-20">
      <GoogleLogin :callback="callback" />
    </div>
    <p>
      {{ data }}
    </p>
  </div>
</template>

<style scoped>
  p {
    margin-top: 12px;
    word-break: break-all;
  }
</style>