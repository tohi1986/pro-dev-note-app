import type { Product } from "../features/products/types"

export async function getProducts(): Promise<Product[]> {
  return [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
    },
    {
      id: 2,
      name: "Mouse",
      price: 50,
    },
  ]
}