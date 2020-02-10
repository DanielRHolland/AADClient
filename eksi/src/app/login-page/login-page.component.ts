import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AuthoService } from '../services/autho/autho.service';
import { StaffMember } from '../models/staff_member.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authoService: AuthoService, private snackBar: MatSnackBar) { }
  isStaff = false;
  user: StaffMember = new StaffMember('', '');
  ngOnInit() {
    this.activatedRoute.data.subscribe(x => this.isStaff = x['isStaff']);
  }

  onSubmit() {
    if (this.user.id && this.user.id !== '') {
      if (this.isStaff) {
        this.authoService.login(this.user).subscribe(data => this.success(data), error => this.failure(error));
      } else {
        this.authoService.changeNNumber(this.user.id);
        this.router.navigateByUrl('/c/home');
      }
    } else {
        this.snackBar.open('Login failed: User ID blank', 'close');
    }
  }
  failure(error) {
    console.error('Failed to login as staff. Error:' + error);
    this.snackBar.open('Failed to login as staff', 'close');
  }
  success(data) {
    console.log('Logged in as staff');
    this.router.navigateByUrl('/s/home');
  }
}
