import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-manual-modal',
  templateUrl: './manual-modal.component.html',
  styleUrls: ['./manual-modal.component.css']
})

export class ManualModalComponent implements OnInit
{

  constructor(public dialogRef: MatDialogRef<ManualModalComponent>)
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
