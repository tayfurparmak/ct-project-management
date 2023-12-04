import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private endpoint = 'http://localhost:3000/projects';
  // private projects: any[] = JSON.parse(
  //   localStorage.getItem('projects') || '[]'
  // );
  public async Get() {
    // return this.projects;
    return (await axios.get(this.endpoint)).data;
  }
  public Add(project: any) {
    project.id = new Date().getTime();
    // this.projects.push(project);
    // this.Reload();
    axios.post(this.endpoint, project);
  }
  public async Remove(id: number) {
    // this.projects = this.projects.filter((item) => {
    //   return item.id !== id;
    // });
    // this.Reload();
    return await axios.delete(this.endpoint + '/' + id);
  }
  public Update(id: number, project: any) {
    // this.Remove(id);
    // project.id = id;
    // this.projects.push(project);
    // this.Reload();
    axios.put(this.endpoint + "/" + id, project)
  }
  private Reload() {
    // localStorage.setItem('projects', JSON.stringify(this.projects));
  }
}
