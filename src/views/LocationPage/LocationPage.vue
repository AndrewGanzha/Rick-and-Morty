<script setup lang="ts">
import Pagination from '../../components/UIPagination.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { loadFromServer } from '@/plugins/server'
import {baseUrl} from '@/views/LocationPage/index.ts'

interface EpisodesProps {
  id: number
  name: string
  type: string
  dimension: string
}

const locations = ref<EpisodesProps[] | null>(null)
const totalPages = ref<number>()
const currentPage = ref<number>(1)


onMounted(async () => {
  const response = await loadFromServer(baseUrl, currentPage.value)

  if(response) {
    locations.value = response.data.results
    totalPages.value = response.data.info.pages
  }
})
</script>

<template>
  <div class="container">
    <h2>Locations</h2>
    <ul>
      <li v-for="location in locations" :key="location.id">
        <h3>Name: {{ location.name }}</h3>
        <p>Dimension: {{ location.dimension }}</p>
        <p>Type: {{ location.type }}</p>
      </li>
    </ul>
    <Pagination :totalPages="totalPages" :current-page="currentPage" />
  </div>
</template>

<style scoped lang="scss">
ul {
  padding-top: 30px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
