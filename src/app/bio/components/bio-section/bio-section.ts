import { Component } from '@angular/core';
import {BioCard} from '../bio-card/bio-card';

@Component({
  selector: 'app-bio-section',
  imports: [
    BioCard
  ],
  templateUrl: './bio-section.html',
  styleUrl: './bio-section.scss',
})
export class BioSection {

}
