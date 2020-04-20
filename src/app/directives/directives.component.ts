import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CoursesService } from '../course/services/courses.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
  // changeDetection: ChangeDetectionStrategy.Default
})
export class DirectivesComponent implements OnInit {
  // @Input() someValue;
  viewTab = 'course';

  details = [{
    id: 1,
    name: {
      firstname: 'dinesh',
      lastname: 'Chand'
    },
    age: 56
  },
  {
    id: 2,
    name: {
      firstname: 'dinesh'
    }
  },
  {
    id: 3,
    age: 30
  },
  {
    id: 4,
    name: {
      firstname: 'Gopal'
    }
  }];

  numberList = [1, 2, 4, 3, 2, 4, 56, 332, 2, 5, 7];

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    console.log(this.courseService.courseList);
  }

  get courseList() {
    return this.courseService.courseList;
  }
  addNewCourse(courseInput: HTMLInputElement) {
    this.courseService.courseList.push({
      id: Date.now(),
      name: courseInput.value
    });
    courseInput.value = '';
  }

}
