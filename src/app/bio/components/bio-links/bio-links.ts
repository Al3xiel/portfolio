import {Component, inject} from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-bio-links',
  imports: [ToastModule, TranslatePipe],
  providers: [MessageService],
  templateUrl: './bio-links.html',
  styleUrl: './bio-links.scss',
})
export class BioLinks {
  private messageService = inject(MessageService);
  private translate = inject(TranslateService);

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.messageService.add({
        severity: 'success',
        summary: this.translate.instant('bio.toast.copy'),
        detail: this.translate.instant('bio.toast.copySuccess'),
        life: 1500
      });
    }).catch(err => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: this.translate.instant('bio.toast.copyError')
      });
    });
  }
}
