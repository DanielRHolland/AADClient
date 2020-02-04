import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login-page',
  templateUrl: './customer-login-page.component.html',
  styleUrls: ['./customer-login-page.component.css']
})

export class CustomerLoginPageComponent implements OnInit 
{

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
