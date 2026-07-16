import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  isLoading :  boolean = false;
  errorMessage: string = ' ';
  constructor
  (private fb: FormBuilder,
   private authService: AuthenticationService,
    private router: Router)
    
   
   {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      department: ['', Validators.required],
      position: ['', Validators.required],
      officeLocation: ['', Validators.required]
      
    });
  
  console.log(this.signupForm);
  }
 onSubmit() {
      console.log("user clicked on submitted button");
    console.log(this.signupForm);

    const {email,password} =this.signupForm.value;

    this.authService.signup(this.signupForm.value).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/signin']);
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Something went wrong. Please try again.';
      }
    });
      }

    }