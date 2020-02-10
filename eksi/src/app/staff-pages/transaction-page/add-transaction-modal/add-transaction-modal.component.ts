import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
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
  displayedColumns = ['productId', 'quantity', 'infoButton', 'deleteButton'];
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddTransactionModalComponent>,
              @Inject(MAT_DIALOG_DATA) public transaction: Transaction,
              private authoService: AuthoService) {

  }

  onNoClick() {
    this.transaction.transactionId = null;
    this.dialogRef.close(); // Closes the dialog box
  }

  ngOnInit()  {
    if (this.transaction == null) {
      this.transaction = new Transaction(uuid(), this.authoService.getNNumber(), '',
      Math.floor(Date.now() / 1000), new Array<TransactionEntry>());
      this.existingTransaction = false;
    }
  }

  openDialog_Entry(item) {

  }

  openDialog_RemoveEntry(item) {
    const i = this.transaction.items.indexOf(item);
    this.transaction.items.splice(i, 1);
  }

}
