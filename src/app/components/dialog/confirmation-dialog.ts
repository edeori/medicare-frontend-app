import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    title: string;
    text: string;
  }

@Component({
    selector: 'confirm-dialog',
    templateUrl: './confirmation-dialog.html',
})
export class ConfirmationDialog { 

    constructor(
        public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {} 
}