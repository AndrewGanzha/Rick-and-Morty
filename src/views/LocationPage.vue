<script setup lang="ts">
import Pagination from '../components/UIPagination.vue'
import axios from 'axios';
import {ref, onMounted} from 'vue';

interface EpisodesProps {
    id: number,
    name: string,
    type: string,
    dimension: string
}

const episodes = ref<EpisodesProps[] | null>(null)
const totalPages = ref<number>()
const currentPage = ref<number>(1)

onMounted(async () => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/location?page=1')
    episodes.value = response.data.results
    totalPages.value = response.data.info.pages
  }  catch (error) {
    console.log(error)
  }
})
</script>

<template>
    <div class="container">
        <h2>Locations</h2>
        <ul>
            <li v-for="episode in episodes" :key="episode.id">
                <h3>Name: {{ episode.name }}</h3>
                <p>Dimension: {{ episode.dimension }}</p>
                <p>Type: {{ episode.type }}</p>
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
        li {
            gap: 10px;
            display: flex;
            list-style: none;
            line-height: 24px;
            flex-direction: column;
        }
    }
</style>
