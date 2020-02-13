import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StaffService } from '../../services/staff/staff.service';
import { AddStaffMemberModalComponent } from './add-staff-member-modal/add-staff-member-modal.component';
import { EditStaffMemberModalComponent } from './edit-staff-member-modal/edit-staff-member-modal.component';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { StaffMember } from '../../models/staff_member.model';

@Component({
  selector: 'app-staff-members-page',
  templateUrl: './staff-members-page.component.html',
  styleUrls: ['./staff-members-page.component.css']
})

export class StaffMembersPageComponent implements OnInit {
  displayedColumns = ['id', 'editButton', 'deleteButton'];
  staffMembers;

  constructor(public dialog: MatDialog, private staffService: StaffService) { }

  ngOnInit() {
    this.staffMembers = ['A', 'B', 'C']; //placeholder
  }

  openDialog_AddStaffMember() {
    const dialogRef = this.dialog.open(AddStaffMemberModalComponent,
    {

    });
    dialogRef.afterClosed().subscribe();
  }

  openDialog_EditStaffMember(staffMember: StaffMember) {
    const dialogRef = this.dialog.open(EditStaffMemberModalComponent,
    {

    });
    dialogRef.afterClosed().subscribe();
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
