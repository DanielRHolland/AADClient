import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { StaffMember } from '../../../models/staff_member.model';

class InjectedData {
  constructor(public staffMember: StaffMember, public disabled: boolean = false) {}
}

@Component({
  selector: 'app-add-staff-member-modal',
  templateUrl: './add-staff-member-modal.component.html',
  styleUrls: ['./add-staff-member-modal.component.css']
})
export class AddStaffMemberModalComponent implements OnInit {
  model: StaffMember;
  disabled = false;
  editMode = false;


  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<AddStaffMemberModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: InjectedData) {
  }

  ngOnInit() {
    if (this.data.staffMember != null) {
      this.model = this.data.staffMember;
      this.editMode = true;
    } else {
      this.model = new StaffMember('', '', '', 1);
    }
    this.disabled = this.data.disabled;
  }

  onNoClick(): void {
    this.dialogRef.close(); // Closes the dialog box
  }

  onSubmit() {
    this.dialogRef.close(this.model);
  }
}
