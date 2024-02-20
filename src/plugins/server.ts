import axios from 'axios'

export async function loadFromServer(url: string, currentPage: number) {
  try {
    const response = await axios.get(`${url} + ${currentPage}`)
    return response
  } catch (error) {
    console.log(error)
  }
}
