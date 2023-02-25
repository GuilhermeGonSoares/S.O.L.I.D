import { OrderStatus } from './interfaces/OrderStatus';
import { MessagingInterface } from '../services/messaginhg';
import { PersistenceInterface } from '../services/persistence';
import { CustomerOrder } from './interfaces/Customer-protocol';
import { ShoppingInterface } from './interfaces/ShoppingInterface';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingInterface,
    private readonly message: MessagingInterface,
    private readonly persistence: PersistenceInterface,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.message.sendMessage(
      `Seu pedido no valor de ${this.cart.totalWithDiscount()} foi recebido`,
    );
    this.persistence.saveOrder();
    this.cart.clear();
  }
}
