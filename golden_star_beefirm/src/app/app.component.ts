import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BeeFirm Management';

  // Check admin routing
  adminRouting() {
    let link = this.router.url;
    let linkArray: string[] = link.split('/', 4);
    if (linkArray[1] == 'admin'){
      return false;
    } else{
      return true;
    }
  }

  constructor(public router: Router) {
  }
}
