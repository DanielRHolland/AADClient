import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MyModalComponent } from './my-modal/my-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class CustomerHomeComponent implements OnInit 
{

  products;

  constructor(public dialog: MatDialog, private httpClient: HttpClient) { }

  ngOnInit()
  {

  }

  openDialog()
  {
    const dialogRef = this.dialog.open(MyModalComponent,
    {
      //width: '500px',
     
    });

    // Assigns users entered data to 'colour: string' once complete
    dialogRef.afterClosed().subscribe();
  }

}
