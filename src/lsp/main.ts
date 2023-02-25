import { Messaging } from './services/messaginhg';
import { Order } from './classes/order';
import { Persistence } from './services/persistence';
import { Product } from './classes/Produto';
import { ShoppingCart } from './classes/shopping';
import { AplicaDiscount } from './classes/discount';

const discount = new AplicaDiscount(50);
const cart = new ShoppingCart(discount);
const message = new Messaging();
const persistence = new Persistence();
const order = new Order(cart, message, persistence);
cart.addItem(new Product('Camiseta', 49.9));
cart.addItem(new Product('Caderno', 29.9));
cart.addItem(new Product('Caneta', 59.59));

console.log(cart.items);
// cart.items[0] = { name: 'teste', price: 10 }; Devido ao Readonly<Product[]> não é possível alterar os elementos de dentro do Array
console.log(cart.total());
console.log(cart.totalWithDiscount());
order.checkout();
console.log(cart.items);
console.log(cart.total());
