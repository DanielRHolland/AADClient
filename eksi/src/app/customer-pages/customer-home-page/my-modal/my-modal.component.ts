import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ScanModalComponent } from '../scan-modal/scan-modal.component';
import { ManualModalComponent } from '../manual-modal/manual-modal.component';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})

export class MyModalComponent implements OnInit
{

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<MyModalComponent>,
    public dialogRef_Scan: MatDialogRef<ScanModalComponent>,
    public dialogRef_Manual: MatDialogRef<ManualModalComponent>)
  { 

  }

  onNoClick(): void
  {
    this.dialogRef.close(); // Closes the dialog box
  }

  ngOnInit()
  {

  }

  openDialog_Scan()
  {
    this.onNoClick();

    const dialogRef_Scan = this.dialog.open(ScanModalComponent,
    {
     
    });

    dialogRef_Scan.afterClosed().subscribe();
  }

  openDialog_Manual()
  {
    this.onNoClick();

    const dialogRef_Manual = this.dialog.open(ManualModalComponent,
    {
     
    });

    dialogRef_Manual.afterClosed().subscribe();
  }
}
