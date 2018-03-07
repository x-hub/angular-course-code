import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('insert email'),
      password: new FormControl('password')
    });
  }

}
