import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageInfoComponent } from './page-info/page-info.component';
import { PageTodoComponent } from './page-todo/page-todo.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Route} from '@angular/router';
import {FormsModule} from '@angular/forms';

const route: Route[] = [{path: 'page-info', component: PageInfoComponent},
  {path: 'page-todo', component: PageTodoComponent},
  {path: '', redirectTo: 'page-info', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageInfoComponent,
    PageTodoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
