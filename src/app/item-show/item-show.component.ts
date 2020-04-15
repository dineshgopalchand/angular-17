import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Interface } from 'readline';

@Component({
  selector: 'app-item-show',
  templateUrl: './item-show.component.html',
  styleUrls: ['./item-show.component.scss'],
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
