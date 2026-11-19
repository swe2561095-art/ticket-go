// Тасалбарын нийт дүн: үнийн нийлбэр, хөнгөлөлтийн хувь (0-100)
function calcTotal(prices, discountPercent = 0) {
  const sum = prices.reduce((a, b) => a + b, 0);
  return Math.round(sum * (1 - discountPercent / 100));
}
module.exports = { calcTotal };
