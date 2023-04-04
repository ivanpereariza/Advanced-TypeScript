import { faker } from "@faker-js/faker"
import { CreateProductDto, FindProductDto, UpdateProductDto } from "./products.dto"
import { Product } from "./products.model"

const products: Product[] = []

const addProduct = (data: CreateProductDto): Product => {

  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }

  products.push(newProduct)

  return newProduct
}


const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {

  const productIdx = products.findIndex(item => item.id === id)

  const prevData = products[productIdx]

  products[productIdx] = {
    ...prevData,
    ...changes,
  }

  return products[productIdx]
}

const searchProducts = (dto: FindProductDto): Product[] => {

  return products
}

const deleteProduct = (id: Product['id']) => {

}


export {
  addProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  products
}
