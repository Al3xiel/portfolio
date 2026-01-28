import { Component, OnInit, signal } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { Button } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { NgStyle, NgClass } from '@angular/common';
import {PROJECTS_DATA} from '../../../data/projects.data';
import {Project} from '../../model/project.entity';

@Component({
  selector: 'app-projects-carousel',
  standalone: true, // Asegurado standalone
  imports: [
    Carousel,
    Button,
    Tag,
    NgStyle,
    NgClass
  ],
  templateUrl: './projects-carousel.html',
  styleUrl: './projects-carousel.scss',
})
export class ProjectsCarousel implements OnInit {
  // 2. Usamos signal para los proyectos
  projects = signal<Project[]>([]);

  responsiveOptions: any[] | undefined;

  ngOnInit() {

    this.projects.set(PROJECTS_DATA);

    // Configuración Responsive (Mantenida igual)
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 2, // Ajustado para que se vean mejor en pantallas medianas
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  // 4. Lógica de colores según el estado del proyecto
  getSeverity(status: string) {
    switch (status) {
      case 'COMPLETED':
        return 'success';    // Verde
      case 'IN_PROGRESS':
        return 'warn';       // Amarillo
      case 'PLANNED':
        return 'info';       // Azul
      default:
        return 'secondary';  // Gris
    }
  }
}
