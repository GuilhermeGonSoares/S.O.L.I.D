import { Messaging } from './services/messaginhg';
import { Order } from './entities/order';
import { Persistence } from './services/persistence';
import { Product } from './entities/Produto';
import { ShoppingCart } from './entities/shopping';

const cart = new ShoppingCart();
const message = new Messaging();
const persistence = new Persistence();
const order = new Order(cart, message, persistence);
cart.addItem(new Product('Camiseta', 49.9));
cart.addItem(new Product('Caderno', 29.9));
cart.addItem(new Product('Caneta', 59.59));

console.log(cart.items);
// cart.items[0] = { name: 'teste', price: 10 }; Devido ao Readonly<Product[]> não é possível alterar os elementos de dentro do Array
console.log(cart.total());
order.checkout();
console.log(cart.items);
console.log(cart.total());
