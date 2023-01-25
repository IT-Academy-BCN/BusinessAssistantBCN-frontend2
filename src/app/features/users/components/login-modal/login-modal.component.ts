import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {

  constructor(private fb:FormBuilder,
  ) {}


  signInForm:FormGroup= this.fb.group({
    email:["",[Validators.required,Validators.email]], 
    password:["",[Validators.required,Validators.minLength(8),Validators.pattern("^[a-zA-Z0-9]*$")]], 
  });

  signUpForm:FormGroup= this.fb.group({
    email:["",[Validators.required,Validators.email]], 
    password:["",[Validators.required,Validators.minLength(8),Validators.pattern("^[a-zA-Z0-9]*$")]], 
  });
}
