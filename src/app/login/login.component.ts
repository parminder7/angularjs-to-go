import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  password: string = '';
  username: string = '';
  fieldRequiredAlert: string = 'This field is required';
  constructor(private fb: FormBuilder) {
      this.rForm = fb.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(500)])],
      'validate' : ''
    });
  }

  ngOnInit() {
  }

  addPost(post) { // here call the backend service
    this.password = post.password;
    this.username = post.username;
  }
}

