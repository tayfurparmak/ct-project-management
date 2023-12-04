import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public projects: any = [];
  constructor(public projectService: ProjectService) {}

  async ngOnInit() {
    this.reload();
  }

  async reload() {
    this.projects = await this.projectService.Get();
  }

  public async remove(id: number) {
    if (confirm('Are you sure?')) {
      await this.projectService.Remove(id);
      await this.reload();
    }
  }
}
