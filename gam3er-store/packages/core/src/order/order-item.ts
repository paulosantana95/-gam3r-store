import { Product } from "../product";

export default interface OrderItem {
  id: string;
  product: Product;
  quantity: number;
  unitPrice: number;
}
