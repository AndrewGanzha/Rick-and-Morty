<script setup lang="ts">
import Pagination from '../../components/UIPagination.vue'
import axios from 'axios'
import {ref, onMounted, watch} from 'vue'
import { loadFromServer } from '@/plugins/server'
import {baseUrl}  from './index.ts'

interface EpisodesProps {
  id: number
  name: string
  episode: string
}

const episodes = ref<EpisodesProps[] | null>(null)
const totalPages = ref<number>()
const currentPage = ref<number>(1)

watch(currentPage, async () => {
  try {
    const response = await loadFromServer(baseUrl, currentPage.value);
    episodes.value = response.data.results
    totalPages.value = response.data.info.pages
  } catch (error) {
    console.log(error)
  }
})

onMounted(async () => {
  const response = await loadFromServer(baseUrl, currentPage.value)

  if (response) {
    episodes.value = response.data.results
    totalPages.value = response.data.info.pages
  }
})

function nextPages(number: number) {
  currentPage.value = number
}
</script>

<template>
  <div class="container">
    <h2>Episodes</h2>
    <ul>
      <li v-for="episode in episodes" :key="episode.id">
        <h3>Name: {{ episode.name }}</h3>
        <p>Episode: {{ episode.episode }}</p>
      </li>
    </ul>
    <Pagination :totalPages="totalPages" :current-page="currentPage" @next-pages="nextPages"/>
  </div>
</template>

<style scoped lang="scss">
ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
