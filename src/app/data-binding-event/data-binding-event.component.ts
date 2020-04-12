import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-event',
  templateUrl: './data-binding-event.component.html',
  styleUrls: ['./data-binding-event.component.scss']
})
export class DataBindingEventComponent implements OnInit {

  // private title = '<i>Data Binding and Event Handling</i>';
  private title = 'Data Binding and Event Handling';
  // imgSrc = 'https://dummyimage.com/300x200/000/fff';
  // date = new Date();
  colSpan = 2;
  rowSpan = 2;

  isActive = false;
  constructor() { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.date = new Date();
    // }, 1000);
  }
  get titleVal() {
    return this.title + '!';
  }
  changeStatus() {
    this.isActive = !this.isActive;
  }

  // getTitleVal() {
  //   return this.title + '!!';
  // }

}
