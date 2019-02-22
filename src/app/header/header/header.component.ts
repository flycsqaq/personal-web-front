import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material/dialog';
import { User } from '../../core/models';
import { UserService } from '../../core/services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  public nav: object = [
    { link: '', hans: '首页' },
    { link: 'blog', hans: '博客' },
    { link: 'read', hans: '阅读' },
    { link: 'plan', hans: '计划'  }
  ]

  public user: User = {
    username: '',
    password: ''
  }
  public cache
  constructor(
    public loginDialog: MatDialog,
    public logoutDialog: MatDialog,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.cache = window.localStorage
  }
  openLoginDialog(): void {
    const dialogRef = this.loginDialog.open(LoginDialog, {
      width: '250px',
      data: {
        user: this.user
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result !== false) {
        this.user = result.user
        this.userService.login(this.user)
      }
      console.log(result)
    })
  }
  openLogoutDialog(): void {
    const dialogRef = this.logoutDialog.open(LogoutDialog, {
      width: '250px',
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.logout()
      }
      console.log(result)
    })
  }
}

@Component({
  selector: 'login-dialog',
  templateUrl: './login-dialog.html'
})
export class LoginDialog {
  isLogin: boolean = false
  constructor(
    public dialogRef: MatDialogRef<LoginDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}
}

@Component({
  selector: 'logout-dialog',
  templateUrl: './logout-dialog.html'
})
export class LogoutDialog {
}