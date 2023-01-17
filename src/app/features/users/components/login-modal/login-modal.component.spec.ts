import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';


import { LoginModalComponent } from './login-modal.component';

describe('LoginModalComponent', () => {
  let component: LoginModalComponent;
  let fixture: ComponentFixture<LoginModalComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginModalComponent ],
      providers: [
        FormBuilder
      ],
      imports: [
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatTabsModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          }, 
        }),
       
        
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login form is valid', () => {
   component.signInForm.get('email')?.setValue('test@gmail.com')
   component.signInForm.get('password')?.setValue('1234qwer')
  expect(component.signInForm.valid).toBeTruthy();
  });

  it('login form should be invalid', () => {
    component.signInForm.get('email')?.setValue('test@gmail.com')
    component.signInForm.get('password')?.setValue('1234qwe*')
   expect(component.signInForm.valid).toBeFalsy();
   });



  it('sign up form is valid', () => {
    component.signUpForm.get('email')?.setValue('test@gmail.com')
    component.signUpForm.get('password')?.setValue('1234qwer')
   expect(component.signUpForm.valid).toBeTruthy();
   });
 
   it('sign up form should be invalid', () => {
     component.signUpForm.get('email')?.setValue('test@gmail.com')
     component.signUpForm.get('password')?.setValue('1234qwe*')
    expect(component.signUpForm.valid).toBeFalsy();
    });

  

});
