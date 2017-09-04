import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topic }           from '../model/topic';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class ForumService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private api = 'http://localhost:10010';
  private getTopicUrl = 'http://localhost:10010/topics';

  constructor(private http: HttpClient) { }

  getAllTopics(): Observable<Topic[]> {
    return this.http.get(`${this.api}/topics`)
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addNewTopic(authorName: string, topic: string): Observable<Topic[]> {
    let body = {
      "authorName": authorName,
      "topic": topic
    };
    return this.http.post(`${this.api}/topics`, body)
    //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
