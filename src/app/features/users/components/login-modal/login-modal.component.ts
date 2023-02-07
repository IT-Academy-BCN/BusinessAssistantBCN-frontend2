import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../../../environments/environment';

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
    if(this.signInForm.valid) {
    this.auth.login(this.signInForm.value).subscribe((res)=>{
      console.log('this.signInForm.Value:',this.signInForm.value); // remove after testing
      console.log('user list:',res); // remove after testing
      console.log('email',res.some(user=>user.email==this.signInForm.value.email) )
      console.log('password',res.some(user=>user.password==this.signInForm.value.password))
       
       if (res.some(user=>user.email==this.signInForm.value.email) && res.some(user=>user.password==this.signInForm.value.password)) {
        console.log('valid'); // remove after testing 
        localStorage.setItem('token',environment.BACKEND_TOKEN)
      } else { 
          console.log('Invalid credentials')
        }
       } )}
  }

    signUp() {
      if(this.signUpForm.valid) {
      this.auth.signup(this.signUpForm.value).subscribe((res)=>{
        console.log(res);
      }
      )}
    }


 

 

}
