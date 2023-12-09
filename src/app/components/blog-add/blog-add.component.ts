import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrl: './blog-add.component.css'
})
export class BlogAddComponent {
  public blog: any = {};

  constructor(
    private blogService: BlogService,
    private toastr: ToastrService
  ) {}

  save() {
    this.blogService.Add(this.blog);
    this.blog = {};
    this.toastr.success('Saved!');
  }
}
