import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { AuthoService } from '../services/autho/autho.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public router: Router, public location: Location, public authoService: AuthoService) { }

  ngOnInit() {
  }

  backClicked() {
    if (!this.location.isCurrentPathEqualTo('') && !this.location.isCurrentPathEqualTo(this.getHome())) {
    this.location.back();
    }
  }

  homeClicked() {
    this.router.navigateByUrl(this.getHome());
  }

  private getHome() {
    if (this.authoService.getApiKey()) {
      return '/s/home';
    } else if (this.authoService.isStaff) {
      return '/s/login';
    } else {
      return '/c/login';
    }
  }

  logoutClicked() {
    this.authoService.logOut();
    this.router.navigateByUrl(this.authoService.isStaff ? '/s/login' : '/c/login');
  }
}
