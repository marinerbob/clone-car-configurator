export const formatNumber = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
  
export const formatPrice = (value, zero = "included") => {
    if (isNaN(value)) return null;
    return value === 0 ? zero : `$${formatNumber(value)}`;
};
  