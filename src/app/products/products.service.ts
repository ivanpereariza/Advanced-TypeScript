import { Product } from "./products.model";

const products: Product[] = []

const addProduct = (data: Product) => {
  products.push(data)
}

export { addProduct, products }
