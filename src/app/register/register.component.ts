import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('hello@angular.io', [Validators.required, Validators.email]),
      password: new FormControl('password', [Validators.required, Validators.min(3), Validators.max(5)])
    });
  }

  submitForm(e) {
    if(this.registerForm.valid) {
      console.log('sending data to server');
    } else {
      alert('Form Invalid');
    }
  }

}
