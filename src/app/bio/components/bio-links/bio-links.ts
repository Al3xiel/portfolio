import {Component, inject} from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-bio-links',
  imports: [ToastModule, TranslatePipe],
  providers: [MessageService],
  templateUrl: './bio-links.html',
  styleUrl: './bio-links.scss',
})
export class BioLinks {
  private messageService = inject(MessageService);

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.messageService.add({
        severity: 'success',
        summary: '¡Copiado!',
        detail: 'Correo copiado al portapapeles',
        life: 1000
      });
    }).catch(err => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo copiar el texto'
      });
    });
  }
}
