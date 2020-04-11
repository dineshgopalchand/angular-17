import { Component } from '@angular/core';
import { CourseService } from './services/course.service';

@Component({
    selector: 'app-course',
    template: `
    <div> course component</div><app-courses></app-courses><hr>
    {{serviceObj.courseList | json}}
    `
})
export class CourseComponent {

    // serviceObj = new CourseService();
    constructor(private serviceObj: CourseService) {
        this.serviceObj.courseList = [
            { id: 1, name: 'Angular' },
            { id: 2, name: 'HTML' },
            { id: 3, name: 'CSS' },
            { id: 4, name: 'JavaScript' },
            { id: 5, name: 'NodeJs' },
            { id: 6, name: 'Python' },
            { id: 7, name: 'Java' },
            { id: 8, name: 'Reactjs' }
        ];
    }

}
