import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from '../common/validators/username.validator';

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
        // Validators.pattern(/^[a-zA-Z0-9]+$/),
        UsernameValidator.shouldNotContainSpace
      ]),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
    // this.signUp.get(['username']);
    // this.signUp.get('username').errors;
    // this.signUp.get('username').touched;
  }
  get username() {
    return this.signUp.get('username');
  }

}
