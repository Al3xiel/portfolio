import { Component } from '@angular/core';
import {BioSection} from "../../../bio/components/bio-section/bio-section";
import {ProjectsSection} from "../../../projects/components/projects-section/projects-section";
import {SkillsSection} from "../../../skills/components/skills-section/skills-section";

@Component({
  selector: 'app-home-page',
    imports: [
        BioSection,
        ProjectsSection,
        SkillsSection
    ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
