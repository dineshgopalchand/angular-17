import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(public courseService: CourseService) {
  }

  ngOnInit() {
    this.courseService.courseList = [
      { id: 1, name: 'Angular' },
      { id: 2, name: 'HTML' },
      { id: 3, name: 'CSS' },
      { id: 4, name: 'JavaScript' },
      { id: 5, name: 'NodeJs' },
      { id: 6, name: 'Python' },
      { id: 7, name: 'Java' },
      { id: 8, name: 'Reactjs' }
    ];

    // setInterval(() => {
    //   this.courseService.courseList.push({
    //     id: 10, name: 'some course'
    //   });
    // }, 1000);
  }

}
