import { addProduct, products, searchProducts, updateProduct } from "./products/products.service";
import { faker } from '@faker-js/faker'


for (let i = 0; i < 50; i++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    image: faker.image.imageUrl(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL', 'XXL']),
    description: faker.commerce.productDescription(),
    color: faker.color.rgb(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    categoryId: faker.datatype.uuid(),
  })
}


console.log(products)


const product1 = products[0]

updateProduct(product1.id, {
  title: 'New title',
  stock: 80,
})


searchProducts({
  stock: 10,
  color: 'red'
})
