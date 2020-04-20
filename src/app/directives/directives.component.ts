import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../course/services/courses.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  viewTab = 'topic';

  numberList = [1, 2, 4, 3, 2, 4, 56, 332, 2, 5, 7];

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    console.log(this.courseService.courseList);
  }

  get courseList() {
    return this.courseService.courseList;
  }

}
