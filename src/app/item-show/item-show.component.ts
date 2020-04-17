import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-item-show',
  // templateUrl: './item-show.component.html',
  // template: '<div> form template property</div>',
  // template: `<div>
  // form template property
  // </div>`,
  templateUrl: './item-show.component.html',
  styles: ['.card-title {background: #a2a2a2;color:red;}', `.card-body{}`],
  styleUrls: ['./item-show.component.scss', './item-show.component.1.css'],
  // encapsulation: ViewEncapsulation.Emulated

  // inputs: ['details'],
})
export class ItemShowComponent implements OnInit {
  @Input() details = [];
  @Input() isSelected = false;
  @Output() selectionChange = new EventEmitter();
  @Output() disableSelection = new EventEmitter();
  // details = {
  //   imgsrc: 'https://dummyimage.com/300x200/633d63/fff&text=Some+Image',
  //   title: 'some title',
  //   desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus odit harum facere esse assumend'
  // };
  constructor() { }

  ngOnInit(): void {
    console.log(this.details);
  }
  selectedChange(checkbox: HTMLInputElement) {
    // console.log(checkbox.checked);
    const returnVal: SelectedChangeType = {
      selected: checkbox.checked,
      item: this.details
    };
    this.selectionChange.emit(returnVal);
  }

}

export interface SelectedChangeType {
  selected: boolean;
  item: any;
}
