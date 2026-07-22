import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { IUser } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { GetConfirmationComponent } from '../../get-confirmation/get-confirmation.component';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  UserDetails!: IUser;
  userId!: string;

  constructor(
    private _routes: ActivatedRoute,
    private _userService: UserService,
    private _snackbar: SnackbarService,
    private _router: Router,
    private _matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchUserDetails();
  }

  fetchUserDetails() {
    // this.userId = this._routes.snapshot.paramMap.get('userId')!;\
    this._routes.params.subscribe((param:Params)=>{
      this.userId =param['userId']
      if (this.userId) {
      this._userService.fetchUserById(this.userId)
        .subscribe({
          next: (data) => {
            this.UserDetails = data;
          },
          error: (err) => {
            console.log(err);
          }
        });
    }
      
    })

    
  }

  onRemoveUser() {

    const matConfig = new MatDialogConfig();

    matConfig.width = '400px';
    matConfig.disableClose = true;
    matConfig.data = `Are you sure you want to remove the User with id ${this.userId}?`;

    const matRef = this._matDialog.open(GetConfirmationComponent, matConfig);

    matRef.afterClosed().subscribe(res => {

      if (res) {

        this._userService.removeUserById(this.userId)
          .subscribe({
            next: (res) => {
              this._snackbar.openSnackBar(res.msg);
              this._router.navigate(['/user']);
            },
            error: (err) => {
              console.log(err);
            }
          });

      }

    });

  }

}