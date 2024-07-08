import { api } from "./base";

export const getHardwares = async ({
  category,
  page,
  size,
  sort,
  minprice,
  maxprice,
  propSize,
}) => {
  const res = await api.get(
    `/hardwares/?page=${page}&size=${size}&sort=${sort}`,
    {
      params: { category, minprice, maxprice, prop_size: propSize },
    }
  );
  return res;
};

export const getHardware = async ({ postId }) => {
  const res = await api.get(`/hardwares/${postId}`);
  return res;
};

export const getHardwareCategories = async ({ size }) => {
  const res = await api.get(`/hardwares/categories?page=1&size=${size}`);
  return res;
};
