<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  currentPage: Number,
  totalPages: Number
})

const emits = defineEmits(['next-pages'])
const nearbyPages = computed(() => {
  let nearby = [];

  if(props.currentPage && props.totalPages) {
    for (let i = props.currentPage - 3; i <= props.currentPage + 3; i++) {
      if (i > 0 && i <= props.totalPages && i < props.totalPages && i !== 1) {
        nearby.push(i);
      }
    }
    nearby = [1, ...nearby, props.totalPages]
    return nearby;
  } else {
    return null;
  }

})
</script>

<template>
  <ul class="pagination">
    <li>
      <button
        v-for="pageNumber in nearbyPages"
        :class="{ 'active-page': pageNumber === currentPage }"
        :key="pageNumber"
        @click="emits('next-pages', pageNumber)"
      >
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

.active-page {
  color: green;
  font-size: 25px;
}

li {
  flex-direction: row;
}

button {
  border: none;
  font-size: 21px;
  cursor: pointer;
  background: none;
}
</style>
