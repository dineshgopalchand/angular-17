import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseService } from './services/course.service';
import { CoursesListComponent } from './courses-list/courses-list.component';



@NgModule({
  declarations: [
    CourseComponent,
    CoursesComponent,
    CourseListComponent,
    CoursesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CourseComponent,
    CoursesComponent,
    CourseListComponent,
    CoursesListComponent
  ],
  providers: [
    CourseService
  ]
})
export class CourseModule { }
