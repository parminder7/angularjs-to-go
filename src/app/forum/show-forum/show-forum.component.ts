import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from './../../service/forum.service';

@Component({
  selector: 'app-show-forum',
  templateUrl: './show-forum.component.html',
  styleUrls: ['./show-forum.component.css']
})
export class ShowForumComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      //this.comments = this.ForumService.getComments(id);
      console.log("request coming for topic id = " + id);
      // TODO: add comment service method and hook it up to UI
    });
  }

}
