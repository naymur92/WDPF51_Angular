import { Component } from '@angular/core';
import { Model } from "./repository.model";
// debugger
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: Model = new Model();
}
