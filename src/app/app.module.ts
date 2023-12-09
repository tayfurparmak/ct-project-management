import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';
import { BlogAddComponent } from './components/blog-add/blog-add.component';
import { PhonebookComponent } from './components/phonebook/phonebook.component';
import { PhonebookaddComponent } from './components/phonebookadd/phonebookadd.component';
import { PhonebookupdateComponent } from './components/phonebookupdate/phonebookupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    BlogAddComponent,
    PhonebookComponent,
    PhonebookaddComponent,
    PhonebookupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
