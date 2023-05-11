import axios from "axios";

export const api = axios.create({
  baseURL: "https://motor-shop-api.onrender.com/",
});

export const apiFipe = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/",
});
