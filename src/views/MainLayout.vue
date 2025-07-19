<script setup>
  import NavBar from '@/components/home/Nav.vue'
  import Footer from '@/components/home/Footer.vue'
</script>

<template>
  <NavBar />
  <main>
    <router-view />
  </main>
  <Footer />
</template>