<script setup lang="ts">
import {ref} from 'vue'

const currentPage = ref<Number>()
const totalPages = ref<Number>()
</script>

<template>
    <div class="pagination">
    <button
      v-for="pageNumber in totalPages"
      :key="pageNumber"
    >
      {{ pageNumber }}
    </button>
  </div>
</template>