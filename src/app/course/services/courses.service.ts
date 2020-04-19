import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courseList = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'HTML' },
    { id: 3, name: 'CSS' },
    { id: 4, name: 'JavaScript' },
    { id: 5, name: 'NodeJs' },
    { id: 6, name: 'Python' },
    { id: 7, name: 'Java' },
    { id: 8, name: 'Reactjs' }
  ];
  constructor() { }
}
