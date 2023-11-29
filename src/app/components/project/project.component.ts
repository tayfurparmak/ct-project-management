import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  public project: any = {};

  constructor(private projectService: ProjectService) {}

  save() {
    this.projectService.Add(this.project);
  }
}
