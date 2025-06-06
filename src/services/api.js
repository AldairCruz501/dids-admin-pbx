// src/services/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  Accept: 'application/json',
  'Content-Type': 'application/json'
  }
})

console.log('API_BASE_URL:', import.meta.env.VITE_API_BASE_URL)
console.log('API_TOKEN:', import.meta.env.VITE_API_TOKEN)


export default api