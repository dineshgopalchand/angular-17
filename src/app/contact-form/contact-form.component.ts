import { Component, OnInit } from '@angular/core';
import { NgForm, NgModelGroup, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  firstName = 'din';
  agreement = false;

  contactOption = [
    {
      id: 1,
      name: 'email'
    },
    {
      id: 2,
      name: 'SMS'
    },
    {
      id: 3,
      name: 'Whatsapp'
    },
    {
      id: 4,
      name: 'Postal'
    },
    {
      id: 5,
      name: 'call'
    }
  ];

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

    // form.controls.firstname.setErrors({ // Set error to specific input field
    //   someError: true
    // });
    // form.controls.firstName.reset(); // reset value to specific input field

    // form.controls.firstname.setErrors({ // Set error to specific input field
    //   someError: true
    // });

    // TO PERFORM OPERATION LIKE setErrors/reset when working with nested FormGroup
    // form.control.get('namegroup.firstname').setErrors({
    //   someError: true
    // });


    form.control.setErrors({ // this  is custom error for entire form
      notSubmited: true
    });

    form.reset(); // to reset form
  }

}
