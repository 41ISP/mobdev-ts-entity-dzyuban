import axios from "axios"

export const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY
export const apiInstance = axios.create({})