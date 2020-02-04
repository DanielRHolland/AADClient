import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-login-page',
  templateUrl: './staff-login-page.component.html',
  styleUrls: ['./staff-login-page.component.css']
})

export class StaffLoginPageComponent implements OnInit 
{

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
