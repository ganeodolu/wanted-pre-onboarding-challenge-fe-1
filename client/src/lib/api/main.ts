import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `${localStorage.getItem('user')} ?? undefined`,
  },
})

export default API
