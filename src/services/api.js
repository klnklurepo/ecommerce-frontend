import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-production-d440.up.railway.app/api"
});

export default API;
