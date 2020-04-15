import { Component, OnInit } from '@angular/core';
import { SelectedChangeType } from '../item-show/item-show.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  selectedItems: any[] = [];

  itemList = [
    {
      imgsrc: 'https://dummyimage.com/300x200/633d63/fff&text=Some+Image1',
      title: 'some title1',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus odit harum facere esse assumend'
    }, {
      imgsrc: 'https://dummyimage.com/300x200/633d63/fff&text=Some+Image2',
      title: 'some title2',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus odit harum facere esse assumend'
    },
    {
      imgsrc: 'https://dummyimage.com/300x200/633d63/fff&text=Some+Image3',
      title: 'some title3',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus odit harum facere esse assumend'
    },
    {
      imgsrc: 'https://dummyimage.com/300x200/633d63/fff&text=Some+Image4',
      title: 'some title4',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus odit harum facere esse assumend'
    },
    {
      imgsrc: 'https://dummyimage.com/300x200/633d63/fff&text=Some+Image5',
      title: 'some title5',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus odit harum facere esse assumend'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  selectionChanged(e: SelectedChangeType) {
    console.log(e.selected);
    console.log('selection change');
    if (e.selected) {
      this.selectedItems.push(e.item);
    } else {
      const indexVal = this.selectedItems.indexOf(e.item);
      this.selectedItems.splice(indexVal, 1);
    }
  }

  removeSelection(item) {
    const indexVal = this.selectedItems.indexOf(item);
    this.selectedItems.splice(indexVal, 1);
  }

  getChecked(item) {
    return this.selectedItems.indexOf(item) !== -1 ? true : false;
  }

}
