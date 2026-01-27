import {Component, inject} from '@angular/core';
import {SelectButton} from 'primeng/selectbutton';
import {FormsModule} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  imports: [
    SelectButton,
    FormsModule
  ],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss',
})
export class LanguageSwitcher {
  private translate = inject(TranslateService);
  stateOptions = [
    { label: 'en', value: 'en' },
    { label: 'es', value: 'es' }
  ];
  value: string = this.translate.getCurrentLang() || 'en';

  changeLanguage(event: any) {
    // event.value contiene 'en' o 'es'
    if (event.value) {
      this.translate.use(event.value);
    }
  }
}
