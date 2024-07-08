import { api } from "./base";

export const getKits = async ({
  page,
  size,
  sort,
  minprice,
  maxprice,
  category,
  propSize,
}) => {
  const res = await api.get(`/kits/?page=${page}&size=${size}&sort=${sort}`, {
    params: {
      minprice,
      maxprice,
      category,
      prop_size: propSize,
    },
  });
  return res;
};

export const getKit = async ({ postId }) => {
  const res = await api.get(`/kits/${postId}`);
  return res;
};

export const getKitsCategories = async () => {
  const res = await api.get("/kits/categories");
  return res;
};
