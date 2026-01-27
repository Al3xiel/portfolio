import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-bio-card',
  imports: [
    TranslatePipe
  ],
  templateUrl: './bio-card.html',
  styleUrl: './bio-card.scss',
})
export class BioCard {

}
