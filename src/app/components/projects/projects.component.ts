import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-projects',
  imports: [TabsModule, BadgeModule, AvatarModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    activeIndex: number | undefined = 0;

    activeIndexChange(index : number){
        this.activeIndex = index
    }

}
