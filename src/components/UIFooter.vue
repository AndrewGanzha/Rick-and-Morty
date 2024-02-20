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
}
</style>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
