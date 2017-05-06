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
import { ProjListComponent } from './proj-list/proj-list.component';
import { ProjItemComponent } from './proj-list/proj-item/proj-item.component';
import { ProjectPipe } from './pipes/project.pipe';

import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';


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
    HomeComponent,
    ProjListComponent,
    ProjItemComponent,
    ProjectPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
