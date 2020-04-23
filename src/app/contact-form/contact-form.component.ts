import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  firstName = 'din';

  constructor() { }

  ngOnInit(): void {
  }
  inputFieldChange(event: KeyboardEvent) {
    console.log(event);
    // console.log(this.firstName);
  }

  contactFormSubmit(form: NgForm) {
    console.log(form);
  }

}
