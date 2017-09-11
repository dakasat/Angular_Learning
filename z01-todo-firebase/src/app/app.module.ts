import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from "../environments/environment";

import { AppComponent } from './app.component';
import { PageMenuComponent } from './page-menu/page-menu.component';
import { PageAddTaskComponent } from './page-add-task/page-add-task.component';
import { PageAllTaskComponent } from './page-all-task/page-all-task.component';
import { PageInfoComponent } from './page-info/page-info.component';

const route: Route[] = [
  { path: 'page-add-task', component: PageAddTaskComponent },
  { path: 'page-all-task', component: PageAllTaskComponent},
  { path: 'page-info', component: PageInfoComponent},
  { path: '', component: PageAddTaskComponent, pathMatch: 'full'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    PageMenuComponent,
    PageAddTaskComponent,
    PageAllTaskComponent,
    PageInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

