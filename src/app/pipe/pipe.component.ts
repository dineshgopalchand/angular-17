import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  course = {
    title: 'Angular CoUrse',
    rating: 4.75232,
    rating1: 4.75282,
    rating2: 4,
    students: 2000,
    price: 10000,
    releaseDate: new Date(2018, 19, 10),
    currentDate: new Date()
  };

  constructor() { }

  ngOnInit(): void {
  }
  // get titleUpper() {
  //   return this.course.title.toUpperCase();
  // }

}
