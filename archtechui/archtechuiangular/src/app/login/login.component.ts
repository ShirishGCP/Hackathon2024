import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginServiceService } from "../service/login-service.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  roles = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'user', viewValue: 'User' },
    { value: 'guest', viewValue: 'Guest' }
    // Add more roles as needed
  ];

  constructor(private fb: FormBuilder, private service: LoginServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      //role: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.service.setCurrentUser(this.loginForm.value.email);
      this.router.navigate(['/sidenav/home']);
      
      // Process login logic here
      console.log(this.loginForm.value.email);
      // Simulate login success/failure
      // Replace with your actual authentication logic (API call, etc.)
      // this.service.login(this.loginForm.value)
      // .subscribe(
      //   response => {
      //     console.log('Login successful!', response);
      //     // Handle success scenario (e.g., redirect to another page)
      //     this.router.navigate(['/home']);
      //   },
      //   error => {
      //     console.error('Login failed. Please check your credentials.');
      //     // Handle error scenario (e.g., display error message)
      //   }
      // );
    } else {
      console.error('Form is invalid. Please fill all required fields.');
    }
  }
}
