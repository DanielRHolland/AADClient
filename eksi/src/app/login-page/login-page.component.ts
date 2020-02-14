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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public authoService: AuthoService, private snackBar: MatSnackBar) { }

  user: StaffMember = new StaffMember('', '', '', 0);
  ngOnInit() {
    this.activatedRoute.data.subscribe(x => this.authoService.isStaff = x.isStaff);
  }

  onSubmit() {
    if (this.user.id && this.user.id !== '') {
      if (this.authoService.isStaff) {
        this.authoService.login(this.user).subscribe(data => console.log(data), error => this.failure(error));
        this.authoService.check(this.user).subscribe(data => {
          if (data) {
            this.success(data);
          } else {
            this.failure(data);
          }
        },
          error => {
            this.snackBar.open('Failed to login as staff', 'close');
          }
        );
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
