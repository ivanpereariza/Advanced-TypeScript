import { UserId } from "./demo"

type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL'

interface Product {
  id: string | number,
  title: string,
  createdAt: Date,
  stock: number,
  size: Sizes
}

interface Food extends Product {
  type: 'vegetable' | 'meat' | 'milk'
}

const products: Product[] = []
