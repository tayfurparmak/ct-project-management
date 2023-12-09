import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogAddComponent } from './components/blog-add/blog-add.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-add', component: BlogAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
