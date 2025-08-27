import { Component } from '@angular/core';
import { Ripple } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-skills',
  imports: [ButtonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  styles: [
        ` :host {
                .box {
                    padding: 2rem;
                    border-radius: 10px;
                    width: 110px;
                    text-align: center;
                }
            }`
    ],
})
export class SkillsComponent {

}
