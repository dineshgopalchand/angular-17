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
    console.log(form.value);
    // api call to save the data

    form.controls.firstname.setErrors({ // Set error to specific input field
      someError: true
    });
    form.controls.firstName.reset(); // reset value to specific input field

    form.control.setErrors({ // this  is custom error for entire form
      notSubmited: true
    });

    form.reset(); // to reset form
  }

}
