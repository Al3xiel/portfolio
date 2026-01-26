import { Component } from '@angular/core';
import {BioCard} from '../bio-card/bio-card';
import {BioLinks} from '../bio-links/bio-links';

@Component({
  selector: 'app-bio-section',
  imports: [
    BioCard,
    BioLinks
  ],
  templateUrl: './bio-section.html',
  styleUrl: './bio-section.scss',
})
export class BioSection {

}
