import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: UntypedFormGroup
  constructor(private build: UntypedFormBuilder) {
    this.form = this.build.group({
      usuario: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  sendForm(value : UntypedFormGroup){
    console.log(value)
  }

}
