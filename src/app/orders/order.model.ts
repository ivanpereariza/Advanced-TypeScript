import { BaseModel } from "../base.model";
import { Product } from "../products/products.model";
import { User } from "../users/user.model";

interface Order extends BaseModel {
  products: Product[],
  user: User
}

export { Order }
