<script setup lang="ts">
defineProps({
  currentPage: Number,
  totalPages: Number
})

const emits = defineEmits(['next-pages'])
</script>

<template>
  <ul class="pagination">
    <li>
      <button v-for="pageNumber in totalPages" :key="pageNumber" @click="emits('next-pages', pageNumber)">
        {{ pageNumber }}
      </button>
    </li>
  </ul>
</template>

<style scoped>
.pagination {
  display: flex;
  flex-direction: row;
  list-style: none;
}

button {
  border: none;
  font-size: 21px;
  cursor: pointer;
  background: none;
}
</style>
