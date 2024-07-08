import axios from "axios";

export const url = "https://api.sortinghat.org";

export const api = axios.create({
  baseURL: url,
});
