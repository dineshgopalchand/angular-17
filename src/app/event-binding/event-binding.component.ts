import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   document.querySelector('.btn.btn-secondary').addEventListener('click', (e) => {
    //     console.log('event from javascript', e);
    //   });
    // }, 1000);
    // (window as any).jsAnotherFunction1 = () => {
    //   console.log('from jsAnotherFunction1');
    // };
  }
  buttonClick(event: MouseEvent) {
    // event.stopPropagation();
    console.log(event);
    console.log('buttonClick function get called');
  }
  parentClick() {
    console.log('parentClick function get called');
  }


}
