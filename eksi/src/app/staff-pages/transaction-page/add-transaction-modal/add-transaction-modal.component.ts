import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';
import { Transaction } from '../../../models/transaction.model';
import { TransactionEntry } from '../../../models/transaction-entry.model';
import { AuthoService } from "../../../services/autho/autho.service";
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-transaction-modal',
  templateUrl: './add-transaction-modal.component.html',
  styleUrls: ['./add-transaction-modal.component.css']
})

export class AddTransactionModalComponent implements OnInit {
  existingTransaction = true;
  displayedColumns = ['productId', 'quantity', 'deleteButton'];
  transaction: Transaction;
  entriesDataSource: MatTableDataSource<TransactionEntry>;

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddTransactionModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Transaction,
              private authoService: AuthoService) {

  }

  onNoClick() {
    this.transaction.transactionId = null;
    this.dialogRef.close(); // Closes the dialog box
  }

  onSubmit() {
    this.entriesDataSource.data.forEach(item => {
      if (item.productId === '' || item.quantity === 0) {
        this.openDialog_RemoveEntry(item);
      }
    });
    this.transaction.items = this.entriesDataSource.data;
    this.dialogRef.close(this.transaction);
  }

  ngOnInit()  {
    this.transaction = this.data;
    if (!this.transaction || !this.transaction.transactionId) {
      this.transaction = new Transaction(uuid(), this.authoService.getNNumber(), '',
      Date.now(), new Array<TransactionEntry>());
      this.existingTransaction = false;
    }
    this.entriesDataSource = new MatTableDataSource<TransactionEntry>(this.transaction.items);
  }

  openDialog_Entry() {
    this.entriesDataSource.data.push(new TransactionEntry(uuid(), '', 0));
    this.entriesDataSource.filter = '';
    console.log(this.entriesDataSource.data);
  }

  openDialog_RemoveEntry(item) {
    const i = this.entriesDataSource.data.indexOf(item);
    this.entriesDataSource.data.splice(i, 1);
    this.entriesDataSource.filter = '';
  }

}
