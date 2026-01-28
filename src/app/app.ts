import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeNG} from 'primeng/config';
import {Topbar} from './shared/components/topbar/topbar';
import {BioSection} from './bio/components/bio-section/bio-section';
import {TranslateService} from '@ngx-translate/core';
import {SkillsSection} from './skills/components/skills-section/skills-section';
import {ProjectsSection} from './projects/components/projects-section/projects-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topbar, BioSection, SkillsSection, ProjectsSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
  constructor(private primeng: PrimeNG, private translate: TranslateService) {
    translate.setFallbackLang('en');
    translate.use('en');
}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }

}
