<script setup lang="ts">
import Pagination from '../components/UIPagination.vue'
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'
import { type CharactersProps } from '../types/type';
import {loadFromServer} from "@/plugins/server";

const currentPage = ref<number>(1)
const baseUrl = 'https://rickandmortyapi.com/api/character?page='
const totalPages = ref<number>()
const characters = ref<CharactersProps[] | null>(null)

watch(currentPage, async () => {
  try {
    const response = await axios.get(`${baseUrl} + ${currentPage.value}`)
    characters.value = response.data.results
    totalPages.value = response.data.info.pages
  } catch (error) {
    console.log(error)
  }
})

onMounted(async () => {
  const response = await loadFromServer(baseUrl, currentPage.value);
  characters.value = response.data.results
  totalPages.value = response.data.info.pages
})

function nextPages(number: number) {
  currentPage.value = number;
}
</script>

<template>
  <div class="container">
    <h2>Characters</h2>
    <ul>
      <li v-for="character in characters" :key="character.id">
        <img :src="character.image" />
        <div class="text">
          <h3>Name: {{ character.name }}</h3>
          <p>Gender: {{ character.gender }}</p>
          <p>Status: {{ character.status }}</p>
        </div>
      </li>
    </ul>
    <Pagination :totalPages="totalPages" :current-page="currentPage" @next-pages="nextPages"/>
  </div>
</template>

<style scoped lang="scss">
ul {
  padding-top: 30px;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  li {
    gap: 10px;
    display: flex;
    flex-direction: column;
    list-style: none;
    line-height: 24px;
  }
}
</style>
