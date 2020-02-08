import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.css']
})

export class CheckoutModalComponent implements OnInit
{
  budgetCode;
  constructor(public dialogRef: MatDialogRef<CheckoutModalComponent>)
  {

  }
  onSubmit() {

  }

  onNoClick() {
    this.dialogRef.close(); // Closes the dialog box
  }

  ngOnInit()
  {

  }
}
