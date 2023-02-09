import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {

  constructor(private fb:FormBuilder,
              private auth:AuthService,
              public dialog:MatDialog) { }


  signInForm:FormGroup= this.fb.group({
    email:["",[Validators.required,Validators.email]], 
    password:["",[Validators.required,Validators.minLength(8),Validators.pattern("^[a-zA-Z0-9]*$")]], 
  });

  signUpForm:FormGroup= this.fb.group({
    email:["",[Validators.required,Validators.email]],
    name:["",[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z0-9]*$")]],
    password:["",[Validators.required,Validators.minLength(8),Validators.pattern("^[a-zA-Z0-9]*$")]], 
  });

  login() {
    if(this.signInForm.valid) {
    this.auth.login(this.signInForm.value).subscribe((res)=>{
      
        // start (remove after backend-poind is ready)     
       if (res.some(user=>user.email==this.signInForm.value.email) && res.some(user=>user.password==this.signInForm.value.password)) {
        console.log('valid credentials');
        const test=res.find(user=>user.email==this.signInForm.value.email) 
        this.auth.user.name=test?.name
        localStorage.setItem('token',environment.BACKEND_TOKEN)
        // end (remove after backend-poind is ready)

        this.auth.loggedIn=true
        this.dialog.closeAll()
       
      } else { 
          console.log('Invalid credentials')
        }
       } )}
  }

    signUp() {
      if(this.signUpForm.valid) {
      this.auth.signup(this.signUpForm.value).subscribe((res)=>{
        
        this.auth.user.name=res.name
        localStorage.setItem('token',environment.BACKEND_TOKEN)
        this.auth.loggedIn=true
        this.dialog.closeAll()
      }

      )}
    }


 

 

}
