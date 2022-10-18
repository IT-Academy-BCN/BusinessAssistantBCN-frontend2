import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup
  constructor(private build: FormBuilder) {
    this.form = this.build.group({
      usuario: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  sendForm(value : FormGroup){
    console.log(value)
  }

}
