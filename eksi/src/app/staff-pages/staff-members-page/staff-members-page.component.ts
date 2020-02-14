import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { StaffService } from '../../services/staff/staff.service';
import { AddStaffMemberModalComponent } from './add-staff-member-modal/add-staff-member-modal.component';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { StaffMember } from '../../models/staff_member.model';

@Component({
  selector: 'app-staff-members-page',
  templateUrl: './staff-members-page.component.html',
  styleUrls: ['./staff-members-page.component.css']
})

export class StaffMembersPageComponent implements OnInit {
  displayedColumns = ['id', 'privLevel', 'username', 'editButton', 'deleteButton'];
  dataSource: MatTableDataSource<StaffMember>;
  isMobile = false;
  staffMembers;

  constructor(public dialog: MatDialog, private staffService: StaffService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<StaffMember>();
    this.update();
    this.isMobile = window.innerWidth < 500;
    this.staffMembers = ['A', 'B', 'C']; // placeholder
  }

  update() {
    this.staffService.getStaffList().subscribe( data => {
      this.dataSource.data = data;
      this.dataSource.filter = '';
    });
  }

  openDialog_AddStaffMember() {
    this.launchStaffDialog();
  }

  openDialog_EditStaffMember(staffMember: StaffMember) {
    this.launchStaffDialog(staffMember);
  }

  openDialog_InfoStaffMember(member: StaffMember) {
    this.launchStaffDialog(member, true);
  }

  launchStaffDialog(member: StaffMember = null, isDisabled: boolean = false) {
    const dialogRef = this.dialog.open(AddStaffMemberModalComponent,
      {
         data: {staffMember: member, disabled: isDisabled}
      });
    if (!isDisabled) {
        if (member) {
          dialogRef.afterClosed().subscribe( result => this.editStaffMember(result));
        } else {
          dialogRef.afterClosed().subscribe( result => this.addStaffMember(result));
        }
    }
  }

  editStaffMember(member: StaffMember) {
    this.staffService.saveStaffMember(member).subscribe( data => {
      this.dataSource.data.push(member);
      this.dataSource.filter = '';
    });
  }

  addStaffMember(member: StaffMember): void {
    this.staffService.saveStaffMember(member).subscribe(data => {
      this.dataSource.data[this.dataSource.data.findIndex(s => s.id === data.id)] = data;
    });
  }

  openDialog_DeleteStaffMember(member: string) {
    const msg = 'Are you sure that you want to delete staff member "' + member + '"?';
    const dialogRef = this.dialog.open(ConfirmDialogComponent,
    {
      data: msg
    });

    dialogRef.afterClosed().subscribe(deleteMember => {
     if (deleteMember) {
       console.log('Deleting Member ' + member + '...');
       this.staffService.deleteStaffMember(member).subscribe(data => console.log(data));
     }
    });
  }

}
