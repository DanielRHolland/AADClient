import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthoService } from '../services/autho/autho.service';
import { StaffMember } from '../models/staff_member.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authoService: AuthoService) { }
  isStaff = false;
  user: StaffMember = new StaffMember('', '');
  ngOnInit() {
    this.activatedRoute.data.subscribe(x => this.isStaff = x['isStaff']);
  }

  onSubmit() {
    if (this.isStaff) {
     this.authoService.login(this.user).subscribe(data => this.success(data), error => this.failure(error));
    } else {
     this.authoService.changeNNumber(this.user.id);
     this.router.navigateByUrl('/c/home');
    }
  }
  failure(error) {
    console.error('Failed to login as staff. Error:' + error);
  }
  success(data) {
    console.log('Logged in as staff');
    this.router.navigateByUrl('/s/home');
  }
}
