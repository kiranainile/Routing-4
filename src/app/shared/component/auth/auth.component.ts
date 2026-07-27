import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  allreadyHasAccount: boolean = false;
  loginForm!: FormGroup;
  signUpForm!: FormGroup;

  constructor(
    private _authService: AuthService,
    private _snackService: SnackbarService,
    private _router:Router
  ) {}

  ngOnInit(): void {
    this.createSignUpform();
    this.createLoginform();
  }

  createSignUpform() {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      userRole: new FormControl(null, [Validators.required]),
    });
  }

  createLoginform() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      userRole: new FormControl('admin'),
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      let details = this.loginForm.value;

      this._authService.login(details).subscribe({
        next: (data) => {
          console.log(data);
          this._snackService.openSnackBar(data.message);
          this._authService.saveToken(data.token);
          this._authService.saveUserRole(data.userRole)
          this._router.navigate(['home'])

        },  
        error: (err) => {
          console.log(err);
          this._snackService.openSnackBar("You have entered the wrong password.");
        }
      });
    }
  }
  onSignUp(){
    console.log(this.signUpForm.value);
    if(this.signUpForm.invalid){
      this.signUpForm.markAllAsTouched()
    }else{
      let userDetails=this.signUpForm.value;
      this._authService.signUp(userDetails)
      .subscribe({
        next:data=>{
          console.log(data);
         this._snackService.openSnackBar(data.message);
         this.allreadyHasAccount=true
        },
        error: err=>{
          console.log(err);
        this._snackService.openSnackBar("You have entered the wrong password.");

        }
      })
    }
  }
}