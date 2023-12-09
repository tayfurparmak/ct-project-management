import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private endpoint = 'http://localhost:3000/blogs';
  public async Get() {
    return (await axios.get(this.endpoint)).data;
  }
  public Add(blog: any) {
    blog.id = new Date().getTime();
    axios.post(this.endpoint, blog);
  }
  public async Remove(id: number) {
    return await axios.delete(this.endpoint + '/' + id);
  }
  public Update(id: number, blog: any) {
    axios.put(this.endpoint + "/" + id, blog)
  }
}
