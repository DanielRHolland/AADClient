import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProductsService } from '../../services/products/products.service';
import { AddStaffMemberModalComponent } from './add-staff-member-modal/add-staff-member-modal.component';
import { EditStaffMemberModalComponent } from './edit-staff-member-modal/edit-staff-member-modal.component';

@Component({
  selector: 'app-staff-members-page',
  templateUrl: './staff-members-page.component.html',
  styleUrls: ['./staff-members-page.component.css']
})

export class StaffMembersPageComponent implements OnInit
{

  staff_members;

  constructor(public dialog: MatDialog) { }

  ngOnInit()
  {

  }

  openDialog_AddStaffMember()
  {
    const dialogRef = this.dialog.open(AddStaffMemberModalComponent,
    {

    });

    // Assigns users entered data to 'colour: string' once complete
    dialogRef.afterClosed().subscribe();
  }

  openDialog_EditStaffMember()
  {
    const dialogRef = this.dialog.open(EditStaffMemberModalComponent,
    {

    });

    // Assigns users entered data to 'colour: string' once complete
    dialogRef.afterClosed().subscribe();
  }

}
