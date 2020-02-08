import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'eksi';

  constructor(private location: Location) {}

  backClicked() {
    if (!this.location.isCurrentPathEqualTo('')) {
    this.location.back();
    }
  }
}


