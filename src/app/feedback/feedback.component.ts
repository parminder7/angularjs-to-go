import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FeedbackService} from './feedback.service';


@Component({
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  fbkForm: FormGroup;
  responseMessage: string;

  constructor(private _formBuilder: FormBuilder, private  _feedbackService: FeedbackService) {
    this.fbkForm = _formBuilder.group({
      'title': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])]
    });
    // Disappear the message if the user is editing the form again
    this.fbkForm.valueChanges.subscribe(data => {
      this.responseMessage = null;
    });
  }
  addPost(post) {
    const feedback = {
      title: post.title,
      feedbackBody: post.description,
      // Hard-coding the idea of feedback-for at the moment
      feedbackFor: 'Ravinderakash'
    };
    // Login module will determine the "userId", so assuming it is 2 for now
    this._feedbackService.saveFeedback('2', feedback)
      .subscribe(addedFeedback => {
          console.log('Feedback was successful: ' + JSON.stringify(addedFeedback));
          this.fbkForm.reset();
          this.responseMessage = 'Feedback was successfully submitted';
        },
      err => {
        console.log('Error was logged : ' + err);
        this.responseMessage = 'Feedback was not submitted successfully submitted. Please try again!';
      });
  }
}
