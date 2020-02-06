import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-staff-member-modal',
  templateUrl: './edit-staff-member-modal.component.html',
  styleUrls: ['./edit-staff-member-modal.component.css']
})

export class EditStaffMemberModalComponent implements OnInit
{
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<EditStaffMemberModalComponent>)
  {

  }

  onNoClick(): void
  {
    this.dialogRef.close(); // Closes the dialog box
  }

  ngOnInit()
  {

  }
}
