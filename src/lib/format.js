import { CURRENCY } from "../data/products";

const formatter = new Intl.NumberFormat("es", {
  style: "currency",
  currency: CURRENCY,
  maximumFractionDigits: 0,
});

export const formatPrice = (value) => formatter.format(value);
