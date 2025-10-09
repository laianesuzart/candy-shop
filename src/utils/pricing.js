export const formatPrice = (value) => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  });
};

export const calculateDiscount = (price, discount) => {
  return Math.round(price * (1 - discount) * 100) / 100;
};
