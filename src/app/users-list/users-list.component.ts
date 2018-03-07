import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  search: FormGroup;
  users = [];
  filteredUsers = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const usersAPI = 'http://localhost:3000/users';

    // Create Search Form
    this.search = new FormGroup({
      input: new FormControl()
    });


    // Listen on changes to search input
    this.search.valueChanges
    .pipe(debounceTime(250))
    .subscribe(({ input }: any) => {
      this.filteredUsers = this.users.filter(({ name }) => {
        return name.includes(input);
      });
    });
    
    // Get Users
    this.httpClient.get(usersAPI)
    .subscribe(({ users }: any) => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

}
