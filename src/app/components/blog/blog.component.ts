import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  public blogs: any = [];
  constructor(public blogService: BlogService) {}

  async ngOnInit() {
    this.reload();
  }

  async reload() {
    this.blogs = await this.blogService.Get();
  }
}
