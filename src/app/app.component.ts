import {Component} from '@angular/core';
import {AuthService} from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular7-starter';


  constructor(private authService: AuthService) {
    this.authService.login('as', 'aasd').subscribe(
        data => {
         console.log(data);
        },
        error => {
          // error message
        },
    );
  }
}
