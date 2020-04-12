import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseModule } from './course/course.module';
import { CoursesService } from './course/services/courses.service';
import { DataBindingEventComponent } from './data-binding-event/data-binding-event.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
