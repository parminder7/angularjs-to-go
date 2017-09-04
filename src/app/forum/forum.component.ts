import { Component, OnInit } from '@angular/core';
import { ForumService } from './../service/forum.service';
import { Topic }           from '../model/topic';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  isDataAvailable:boolean;
  private topics: Topic[];
  private rForm: FormGroup;

  constructor(private forumService:ForumService, private fb: FormBuilder) {
    this.isDataAvailable = false;
    this.rForm = fb.group({
      'authorname' : [null, Validators.required],
      'question' : [null, Validators.required],
      'validate' : ''
    });
  }

  ngOnInit() {
    this.forumService.getAllTopics().subscribe( data => {
      this.isDataAvailable = true;
      this.topics = data;
    });
  }
}
