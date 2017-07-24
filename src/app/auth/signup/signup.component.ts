import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.authService.isAuthenticate()){
      this.router.navigate(['/']);
    }
  }

  onSignup(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email,password);
  }
}
