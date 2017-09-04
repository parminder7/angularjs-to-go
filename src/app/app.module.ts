import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {RouterModule, Routes} from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import { ForumService } from './service/forum.service';
import { HttpClientModule } from '@angular/common/http';
import { AddForumComponent } from './forum/add-forum/add-forum.component';
import { ShowForumComponent } from './forum/show-forum/show-forum.component';

const appRoutes: Routes = [
  { path: 'feedback', component: FeedbackComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'add-forum', component: AddForumComponent },
  { path: 'app-show-forum/:id', component: ShowForumComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    LoginComponent,
    ForumComponent,
    AddForumComponent,
    ShowForumComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,  { enableTracing: true }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ForumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
