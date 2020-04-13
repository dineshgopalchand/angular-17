import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  buttonClick(event: MouseEvent) {
    event.stopPropagation();
    console.log(event);
    console.log('buttonClick function get called');
  }
  parentClick() {
    console.log('parentClick function get called');
  }

}
