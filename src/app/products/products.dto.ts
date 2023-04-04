import { Product } from "./products.model";

interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {   //omite los campos seleccionados y puedes incluir nuevos
  categoryId: string,
}

interface UpdateProductDto extends Partial<CreateProductDto> { } //todo es opcional

interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> { //opcional pero solo de lectura y omitiendo tags
  readonly tags: ReadonlyArray<string>
}

type exaple = Pick<Product, 'color' | 'category'> //seleccionar solo algunos

type exaple2 = Required<Product> //todo es obligatorio

export { CreateProductDto, UpdateProductDto, FindProductDto }
