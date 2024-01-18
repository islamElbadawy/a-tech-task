import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  qrCodeValue = 'www.tazkty.com/473847';

  constructor(private messageService: MessageService) {}

  copyText(): void {
    navigator.clipboard
      .writeText(this.qrCodeValue)
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Ticket',
          detail: 'Text copied',
          sticky: false,
          life: 2000,
        });
      })
      .catch(() => {
        console.error('Unable to copy text');
      });
  }
}
