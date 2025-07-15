import { Component } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [AboutMeComponent, SkillsComponent, ProjectsComponent]
})
export class HomeComponent {

}
