<script setup lang="ts">
import axios from 'axios';
import {ref, onMounted} from 'vue';

interface CharactersProps {
    id: number,
    name: string,
    status: string,
    gender: string
    image: string
}

const characters = ref<CharactersProps[] | null>(null)

onMounted(async () => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character?page=1')
    characters.value = response.data.results
  }  catch (error) {
    console.log(error)
  }
})
</script>

<template>
    <div class="container">
        <h2>Characters</h2>
        <ul>
            <li v-for="character in characters" :key="character.id">
                <img :src="character.image"/>
                <div class="text">
                <h3>Name: {{ character.name }}</h3>
                <p>Gender: {{ character.gender }}</p>
                <p>Status: {{ character.status }}</p>
                </div>
            </li>
        </ul>
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
            flex-direction: column;
            list-style: none;
            line-height: 24px;
        }
    }
</style>
