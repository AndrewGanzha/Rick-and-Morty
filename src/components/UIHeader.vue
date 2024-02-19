<template>
  <header class="container header">
    <img src="../assets/Rick_and_Morty-Logo.svg" width="200" height="100" />
    <router-link to="/">Characters</router-link>
    <router-link to="/episodes">Episodes</router-link>
    <router-link to="/locations">Locations</router-link>
    <input type="text" placeholder="Search..." />
  </header>
</template>

<style scoped lang="scss">
@import '../styles/variables';
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  text-decoration: none;
  color: black;
  font-size: 18px;
}
.router-link-active {
  color: $green-color;
  font-weight: bold;
}
</style>
