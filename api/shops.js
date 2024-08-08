import { api } from "./base";

export const getShop = async ({ shopId }) => {
  const res = await api.get(`/shops/${shopId}`);
  return res;
};

export const getShopKits = async ({
  shopId,
  page,
  size,
  category,
  prop_size,
  minprice,
  maxprice,
  sort,
}) => {
  const res = await api.get(`/shops/${shopId}/kits`, {
    params: {
      shop_id: shopId,
      page,
      size,
      category,
      prop_size,
      minprice,
      maxprice,
      sort,
    },
  });
  return res;
};

export const getShopProducts = async ({
  shopId,
  page,
  size,
  category,
  prop_size,
  minprice,
  maxprice,
  sort,
}) => {
  const res = await api.get(`/shops/${shopId}/products`, {
    params: {
      shop_id: shopId,
      page,
      size,
      category,
      prop_size,
      minprice,
      maxprice,
      sort,
    },
  });
  return res;
};
