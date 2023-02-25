export interface MessagingInterface {
  sendMessage: (msg: string) => void;
}

export class Messaging implements MessagingInterface {
  sendMessage(msg: string) {
    console.log('Mensagem enviada:', msg);
  }
}
