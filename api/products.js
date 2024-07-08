import { api } from "./base";

export const getProducts = async ({
  page,
  size,
  sort,
  category,
  minprice,
  maxprice,
  propSize,
}) => {
  const res = await api.get(
    `/products/?page=${page}&size=${size}&sort=${sort}`,
    {
      params: {
        category,
        minprice,
        maxprice,
        prop_size: propSize,
      },
    }
  );
  return res;
};

export const getProduct = async ({ productId }) => {
  const res = await api.get(`/products/${productId}`);
  return res;
};

export const getProductsCategories = async () => {
  const res = await api.get("/products/categories");
  return res;
};
