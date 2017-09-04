import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Feedback} from './feedback';
import 'rxjs/Rx';

@Injectable()
export class FeedbackService {

  baseurl = 'http://localhost:10010/';
  userPath = 'user/';
  feedbackPath = '/feedbacks';

  constructor(private http: Http) { }

  saveFeedback(userId, feedback): Observable<Feedback> {
    const postHeader = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: postHeader });
    return this.http.post(this.baseurl + this.userPath + userId + this.feedbackPath , feedback, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
