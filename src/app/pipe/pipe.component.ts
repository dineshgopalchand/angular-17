import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  summaryLength: (number | 'full') = 100;
  course = {
    title: 'Angular CoUrse',
    rating: 4.75232,
    rating1: 4.75282,
    rating2: 4,
    students: 2000,
    price: 10000,
    releaseDate: new Date(2018, 19, 10),
    currentDate: new Date(),
    // tslint:disable-next-line:max-line-length
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa voluptas ab, ipsam laboriosam impedit quis vitae odio fugiat quasi hic ducimus temporibus quibusdam optio ex expedita cum maiores soluta non consequatur doloremque magnam saepe? Corporis sed saepe molestiae sequi soluta reprehenderit vitae harum suscipit? Ea odio doloribus accusantium corporis vero, error architecto iusto ipsa amet illum omnis. Maxime officiis laudantium necessitatibus harum, aliquid, quis iusto dolorem tenetur laboriosam ullam praesentium esse explicabo deserunt natus, eligendi provident ea aut corrupti deleniti rerum? Repellendus ducimus sapiente molestiae eaque veniam doloribus reiciendis, assumenda nemo voluptatem error ad debitis rem consectetur? Quia, voluptatum.`
  };

  constructor() { }

  ngOnInit(): void {
  }
  // get titleUpper() {
  //   return this.course.title.toUpperCase();
  // }

  updateSummaryLength() {
    this.summaryLength = this.summaryLength === 100 ? 'full' : 100;
  }

}
