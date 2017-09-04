import { Component, OnInit } from '@angular/core';
import { ForumService } from './../../service/forum.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-forum',
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.css']
})
export class AddForumComponent implements OnInit {
  private rForm: FormGroup;

  constructor(private forumService:ForumService, private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
    this.rForm = fb.group({
      'authorname' : [null, Validators.required],
      'question' : [null, Validators.required],
      'validate' : ''
    });
  }

  ngOnInit() {

  }

  addTopic(options){
    this.forumService.addNewTopic(options.authorname, options.question).subscribe( data => {
      //TODO: need to cover error case
      //console.log("topic added!!!");
      //console.log(data);
      this.goToForumMainPage();
    });
  }

  goToForumMainPage(){
    let link = ['/forum'];
    this.router.navigate(link);
  }
}
