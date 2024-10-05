import DeliveryOrder from "./delivery-order";
import OrderItem from "./order-item";
import { Status } from "./order-status";
import { PaymentMethod } from "./payment-methods";

export default interface Order {
  id: string;
  date: Date;
  items: OrderItem[];
  totalValue: number;
  status: Status;
  paymentMethod: PaymentMethod;
  delivery: DeliveryOrder;
}
