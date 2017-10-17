import { Message } from './message.model';

export class MessageService {
  private messages: Message[] = [
    new Message('Language is the dress of thought', 'Catty'),
    new Message('While I’m breathing — I love and believe.', 'Lu'),
    new Message('Fools grow without watering', 'Den'),
    new Message('Illusion is the first of all pleasures.', 'Marty'),
    new Message('Be careful with your thoughts – they are the beginning of deeds.', 'Rick'),
    new Message('I reject your reality and substitute my own!', 'MoodCat'),
    new Message('Those who cannot change their minds cannot change anything.', 'Catien')
  ];

  addMessage(message: Message) {
    this.messages.push(message);
  }

  getMessage() {
    return this.messages;
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
