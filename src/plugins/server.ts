import axios from 'axios'

export async function loadFromServer(url: string, currentPage: number) {
  try {
    const response = await axios.get(`${url} + ${currentPage}`)
    window.scrollTo({ top: 0, behavior: "smooth" });
    return response
  } catch (error) {
    console.log(error)
  }
}
