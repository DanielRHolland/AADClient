import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MyModalComponent } from './my-modal/my-modal.component';
import { CheckoutModalComponent } from './checkout-modal/checkout-modal.component';

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

  openDialog_AddItem()
  {
    const dialogRef = this.dialog.open(MyModalComponent,
    {

    });

    // Assigns users entered data to 'colour: string' once complete
    dialogRef.afterClosed().subscribe();
  }

  openDialog_CheckoutItems()
  {
    const dialogRef = this.dialog.open(CheckoutModalComponent,
    {

    });

    // Assigns users entered data to 'colour: string' once complete
    dialogRef.afterClosed().subscribe();
  }

}
