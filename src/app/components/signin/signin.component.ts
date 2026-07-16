import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  //declaration form
  signinform:FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthenticationService) {
this.signinform = this.fb.group({
  email: ['' , [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(8)]]
});
console.log(this.signinform);
   }
   onSubmit() {
    console.log('user clicked on submit button');
   console.log(this.signinform);

   const { email, password } = this.signinform.value;

   this.authService.login(email, password).subscribe({
    next: (user) => {
      if(user){
        console.log("Valid user', login successful");
      }
      else{
        console.log('Invalid user, login failed');
      }
    }
  
  })
   }
  }