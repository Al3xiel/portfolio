// src/app/data/projects.data.ts
// Asegúrate que la ruta sea correcta hacia tu entidad
import {Project} from '../projects/model/project.entity';

export const PROJECTS_DATA: Project[] = [
  new Project({
    id: 1,
    name: 'Portfolio Personal',
    description: 'Sitio web personal desarrollado con Angular 18 y PrimeNG. Incluye modo oscuro y soporte multilenguaje.',
    image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
    status: 'COMPLETED',
    technologies: ['Angular', 'PrimeNG', 'Tailwind'],
    githubUrl: 'https://github.com/Al3xiel/portfolio',
    demoUrl: 'https://mi-portfolio.com'
  }),
  new Project({
    id: 2,
    name: 'Sistema de Gestión IoT',
    description: 'Plataforma para monitoreo de sensores en tiempo real usando Spring Boot y WebSockets.',
    image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria12.jpg',
    status: 'IN_PROGRESS',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
    githubUrl: 'https://github.com/Al3xiel/iot-system'
  }),
  new Project({
    id: 3,
    name: 'App Móvil de Finanzas',
    description: 'Aplicación móvil cross-platform para gestión de gastos personales.',
    image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg',
    status: 'COMPLETED',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    githubUrl: 'https://github.com/Al3xiel/finance-app'
  }),
  new Project({
    id: 4,
    name: 'API Gateway Microservicios',
    description: 'Arquitectura de microservicios con autenticación centralizada y balanceo de carga.',
    image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria8.jpg',
    status: 'PLANNED',
    technologies: ['Docker', 'Kubernetes', 'Java'],
    githubUrl: 'https://github.com/Al3xiel/microservices'
  })
];
