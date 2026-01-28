import { Component } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {ProjectsCarousel} from '../projects-carousel/projects-carousel';

@Component({
  selector: 'app-projects-section',
  imports: [
    TranslatePipe,
    ProjectsCarousel
  ],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {

}
