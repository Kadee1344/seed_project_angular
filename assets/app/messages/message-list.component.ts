import { Component } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-message-list',
  template: `
    <div class="col-md-8 col-md-offset-2">
      <app-message [message]="message"
                   (editClicked)="message.content = $event"
                   *ngFor="let message of messages"></app-message>
    </div>
  `
})

export class MessageListComponent {
  messages: Message[] = [
    new Message('Language is the dress of thought', 'Catty'),
    new Message('While I’m breathing — I love and believe.', 'Lu'),
    new Message('Fools grow without watering', 'Den'),
    new Message('Illusion is the first of all pleasures.', 'Marty'),
    new Message('Be careful with your thoughts – they are the beginning of deeds.', 'Rick'),
    new Message('I reject your reality and substitute my own!', 'MoodCat'),
    new Message('Those who cannot change their minds cannot change anything.', 'Catien')
  ];
}
