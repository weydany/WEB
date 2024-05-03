import { Component } from '@angular/core';
import {TelegramService} from "@app/services/telegram.service";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  constructor(private telegramService: TelegramService) {}

  onSubmit(name: string, phone: string): void {
    const message: string = `Новая заявка:\nИмя: ${name}\nНомер телефона: ${phone}`;
    this.telegramService.sendMessage(message).subscribe(
      (): void => {
        console.log('Message sent successfully');
      },
      (error): void => {
        console.error('Error sending message:', error);
      },
    );
  }
}
