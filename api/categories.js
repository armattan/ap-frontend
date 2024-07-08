import { api } from "./base";

export const getCategories = async ({ size }) => {
  const res = await api.get(`/hardwares/categories?page=1&size=${size}`);
  return res;
};
