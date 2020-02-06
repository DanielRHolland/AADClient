import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-add-staff-member-modal',
  templateUrl: './add-staff-member-modal.component.html',
  styleUrls: ['./add-staff-member-modal.component.css']
})

export class AddStaffMemberModalComponent implements OnInit
{
  model = new Product('eg0', 'nom', 1, 'main stores', 1000, 120, 'example 0');



  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<AddStaffMemberModalComponent>) {

  }

  onNoClick(): void
  {
    this.dialogRef.close(); // Closes the dialog box
  }

  ngOnInit()
  {

  }
}
