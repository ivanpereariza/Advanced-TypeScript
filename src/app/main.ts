import { addProduct } from "./products/products.service";


addProduct({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90,
  size: 'XL',
  category: {
    id: 12,
    name: 'c1'
  }
})
