import { api } from "./base";

export const getShipping = async () => {
  const res = await api.get("/shipping/");
  return res;
};
