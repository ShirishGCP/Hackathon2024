import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationForm!: FormGroup;
  errormessage!: string;
  roles = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'carer', viewValue: 'Carer' },
    { value: 'guest', viewValue: 'Guest' },
    { value: 'nurse', viewValue: 'Nurse' },
    { value: 'user', viewValue: 'User' },
    // Add more roles as needed
  ];

  constructor(private fb: FormBuilder, private signupService:SignupService) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userName: ['', Validators.required],
      // lastName: ['', Validators.required],
      // age: ['', [Validators.required, Validators.min(18)]],
      userEmail: ['', [Validators.required, Validators.email]],
      //dob: ['', Validators.required],
      userMobileNo: ['', Validators.required],
     // country: ['', Validators.required],
      //state: ['', Validators.required],
      //city: ['', Validators.required],
      //pincode: ['', Validators.required],
      //address: ['', Validators.required],
      userRole: ['', Validators.required],
      userPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  
  onSubmit() {
    if (this.registrationForm.valid) {
      // Ensure passwords match
      if (this.registrationForm.value.userPassword !== this.registrationForm.value.confirmPassword) {
        console.error("Passwords do not match.");
        this.errormessage = "Passwords do not match.";   
        return;
      }

      //Process the registration form submission
      this.signupService.signup(this.registrationForm.value)
      .subscribe(
        response => {
          console.log('Signup successful!', response);
          // Handle success scenario (e.g., redirect to another page)
        },
        error => {
          console.error('Signup failed!', error);
          // Handle error scenario (e.g., display error message)
        }
      );
      console.log(this.registrationForm.value);
      // Here you can send the form data to your backend service or perform other actions
    } else {
      // Handle invalid form
      this.errormessage = "Form is invalid. Please fill all required fields.";
      console.error("Form is invalid. Please fill all required fields.");
    }
  }

}

