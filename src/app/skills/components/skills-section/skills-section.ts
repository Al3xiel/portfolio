import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {Chip} from 'primeng/chip';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-skills-section',
  imports: [
    TranslatePipe,
    Chip,
    NgOptimizedImage
  ],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSection {

}
