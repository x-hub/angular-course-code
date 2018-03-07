import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { BgGreenDirective } from './bg-green.directive';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RegisterComponent } from './register/register.component';
import { ComputerComponent } from './computer/computer.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Route[] = [
  { path: '', component: HomeComponentComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'computer/:id', component: ComputerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchResultComponent,
    BgGreenDirective,
    HomeComponentComponent,
    RegisterComponent,
    ComputerComponent,
    UsersListComponent
  ],
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
