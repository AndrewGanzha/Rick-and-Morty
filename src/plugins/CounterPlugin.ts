import { ref } from 'vue'

let currentPage = ref(1)

export const incrementCouner = (currentPage: number, totalPages: number) => {
  if (currentPage < totalPages) {
    currentPage = currentPage + 1
  }
}

export const decrementCouner = (currentPage: number) => {
  if (currentPage > 1) {
    currentPage = currentPage - 1
  }
}
