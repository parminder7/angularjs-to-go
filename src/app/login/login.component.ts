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
  name: string = '';
  titleAlert: string = 'This field is required';
  constructor(private fb: FormBuilder) {
      this.rForm = fb.group({
      'name' : [null, Validators.required],
//      'password' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'password' : [null, Validators.required],
      'validate' : ''
    });
  }

  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(

      (validate) => {

          if (validate === '1') {
              this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
              this.titleAlert = 'You need to specify at least 3 characters';
          } else {
              this.rForm.get('name').setValidators(Validators.required);
          }
          this.rForm.get('name').updateValueAndValidity();

      });
  }

  addPost(post) { // here call the backend service
    this.password = post.password;
    this.name = post.name;
  }
}

