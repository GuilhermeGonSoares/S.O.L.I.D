export interface PersistenceInterface {
  saveOrder: () => void;
}

export class Persistence implements PersistenceInterface {
  saveOrder() {
    console.log('Pedido salvo com sucesso');
  }
}
