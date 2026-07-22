import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user';
import { UserService } from '../../services/user.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userArr!: Array<IUser>;

  constructor(
    private _userService: UserService,
    private _snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.fetchUser()
      .subscribe({
        next: (data) => {
          this.userArr = data;
        },
        error: (err) => {
          
          this._snackbar.openSnackBar('err');
        }
      });
  }
}