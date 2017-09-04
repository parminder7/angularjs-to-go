import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  fbkForm: FormGroup;
  title: string;
  description: string;
  post: any;

  constructor(private _formBuilder: FormBuilder) {
    this.fbkForm = _formBuilder.group({
      'title': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])]
    });
  }
  addPost(post) {
    this.title = post.title;
    this.description = post.description;
    // TODO: Need to send HTTP POST request to BE server to save the feedback
    console.log('Received request for the ' + this.title + ' feedback');
  }

  ngOnInit() {
  }

}
