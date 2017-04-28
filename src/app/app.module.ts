import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { JobComponent } from './job-list/job/job.component';
import { JobListComponent } from './job-list/job-list.component';
import { EduItemComponent } from "./edu-list/edu-item/edu-item.component";
import { EduListComponent } from "./edu-list/edu-list.component";
import { JobPipe } from './pipes/job.pipe';
import { EduPipe } from './pipes/edu.pipe';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes = [
  {path:'', component:HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    JobListComponent,
    EduItemComponent,
    EduListComponent,
    JobPipe,
    EduPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
