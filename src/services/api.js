// src/services/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

console.log(import.meta.env.VITE_API_BASE_URL)
console.log(import.meta.env.VITE_API_TOKEN)

export default api