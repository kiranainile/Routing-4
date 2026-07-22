import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirmation',
  templateUrl: './get-confirmation.component.html',
  styleUrls: ['./get-confirmation.component.css']
})
export class GetConfirmationComponent implements OnInit {

  msg!: string;

  constructor(
    private matDialogRef: MatDialogRef<GetConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) data: string
  ) {
    this.msg = data;
  }

  ngOnInit(): void {}

  onClose(flag: boolean) {
    this.matDialogRef.close(flag);
  }
}