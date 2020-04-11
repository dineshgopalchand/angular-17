import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  template: `
    <p>
      course-list works!
    </p>
    <h3>Course List</h3>
<ul>
    <li *ngFor="let course of courseService.courseList">{{course.name}}</li>
</ul>
  `,
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }

}
