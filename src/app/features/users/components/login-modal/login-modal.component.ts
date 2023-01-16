import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
    password:["",[Validators.required,Validators.minLength(8)]], 
  });

  signUpForm:FormGroup= this.fb.group({
    email:["",[Validators.required,Validators.email]], 
    password:["",[Validators.required,Validators.minLength(8)]], 
  });


 

 
}
