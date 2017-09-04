import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'feedback', component: FeedbackComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,  { enableTracing: true }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
