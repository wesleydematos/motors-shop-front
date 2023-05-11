import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333/",
});

export const apiFipe = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/",
});
