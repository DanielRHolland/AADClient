import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})

export class MyModalComponent implements OnInit 
{

  constructor(public dialogRef: MatDialogRef<MyModalComponent>)
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
