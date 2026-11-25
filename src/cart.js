export function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function applyDiscount(amount, percent) {
  if (percent < 0 || percent > 100) {
    throw new Error("Discount must be between 0 and 100");
  }
  return Math.round(amount * (100 - percent)) / 100;
}
