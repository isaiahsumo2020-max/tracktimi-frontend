// src/utils/api.js
import axios from 'axios'
import { useAuthStore } from '@/stores/auth.js'


// Use environment variable for backend
const baseURL = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor - auto-add token
api.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  if (authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`
  }
  return config
})

export default api
