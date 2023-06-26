import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { RouterModule } from '@angular/router';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import{FormsModule} from '@angular/forms';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component'


@NgModule({
  declarations: [
    ProjectsComponent,
    AddBlogComponent,
    EditBlogComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class ProjectsModule { }
