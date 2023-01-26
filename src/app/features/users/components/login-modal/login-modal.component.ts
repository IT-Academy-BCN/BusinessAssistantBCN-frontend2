import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {

  constructor(private fb:FormBuilder,
              private auth:AuthService) { }
  


  signInForm:FormGroup= this.fb.group({
    email:["",[Validators.required,Validators.email]], 
    password:["",[Validators.required,Validators.minLength(8),Validators.pattern("^[a-zA-Z0-9]*$")]], 
  });

  signUpForm:FormGroup= this.fb.group({
    email:["",[Validators.required,Validators.email]], 
    password:["",[Validators.required,Validators.minLength(8),Validators.pattern("^[a-zA-Z0-9]*$")]], 
  });

  login() {
    this.auth.login(this.signInForm.value).subscribe((res)=>{
      console.log(res);
    }
    )}
    signUp() {
      this.auth.signup(this.signUpForm.value).subscribe((res)=>{
        console.log(res);
      }
      )}


 

 

}
