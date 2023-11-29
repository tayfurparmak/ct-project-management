import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  public project: any = {};

  constructor(
    private projectService: ProjectService,
    private toastr: ToastrService
  ) {}

  save() {
    this.projectService.Add(this.project);
    this.project = {};
    this.toastr.success('Saved!');
  }
}
