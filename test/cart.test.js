import { test } from "node:test";
import assert from "node:assert/strict";
import { subtotal, applyDiscount } from "../src/cart.js";

test("subtotal adds up price times quantity", () => {
  const items = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 1 },
  ];
  assert.equal(subtotal(items), 25);
});

test("applyDiscount takes off the percentage", () => {
  assert.equal(applyDiscount(50, 10), 45);
});

test("applyDiscount rejects invalid percentages", () => {
  assert.throws(() => applyDiscount(50, 120));
});
