import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    user= 'Hello world';
  title = 'Bonjour!';
  searchResults = ['Clean Code', 'Pragmatic Coder', 'Angular deep dive'];
  constructor(private router: Router) {

  }
    onMessage(e) {
        console.log('app.component' ,e);
    }
    goToHome(event) {
      this.router.navigate(['/']);
    }
}
