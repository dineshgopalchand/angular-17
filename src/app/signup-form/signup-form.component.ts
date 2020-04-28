import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  signUp: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signUp = new FormGroup({
      username: new FormControl({ value: '', disabled: false }, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
        Validators.pattern(/^[a-zA-Z0-9]+$/)
      ]),
      password: new FormControl('')
    });
  }

}
