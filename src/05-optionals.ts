const createProduct = (id: string | number, isNew: boolean = true, stock: number = 10) => {
  return {
    id,
    isNew,
    stock
  }
}



console.log(createProduct(1, true, 12))
console.log(createProduct(1, true, 0))
console.log(createProduct(1))
console.log(createProduct(1, false))

export default createProduct
