import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public router: Router, private location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    if (!this.location.isCurrentPathEqualTo('')) {
    this.location.back();
    }
  }
}
