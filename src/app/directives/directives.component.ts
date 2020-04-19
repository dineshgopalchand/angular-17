import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../course/services/courses.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  viewTab = 'course';

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    console.log(this.courseService.courseList);
  }

  get courseList() {
    return this.courseService.courseList;
  }

}
