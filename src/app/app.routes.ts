import { Routes } from '@angular/router';
import {HomePage} from './shared/pages/home-page/home-page';
import {ProjectsPage} from './projects/pages/projects-page/projects-page';
import {ProjectDetailPage} from './projects/pages/project-detail-page/project-detail-page';

export const routes: Routes = [
  {path:'', redirectTo: "/home", pathMatch: 'full'},
  {path:'home', component: HomePage},
  {path:'projects', component: ProjectsPage},
  {path:'projects/:id', component: ProjectDetailPage},
  {path:'**', redirectTo: "/home", pathMatch: 'full'},
];
