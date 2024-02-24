<template>
  <footer>
    <p>{{ currentYear }} Andrew Ganzha</p>
  </footer>
</template>

<style scoped>
footer {
  background: black;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100vw;
}
</style>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
