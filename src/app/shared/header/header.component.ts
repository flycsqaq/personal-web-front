import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../core/models';
import { ActivatedRouteSnapshot, Router } from '../../../../node_modules/@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  public user: User = {
    username: '',
    password: ''
  }
  public routerLinks = [
    { link: '/', hans: 'home' },
    { link: '/blog', hans: '博客' }
  ]
  activeLink: string = '/'
  constructor(
    public userService: UserService,
    private loginDialog: MatDialog,
    private logoutDialog: MatDialog,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.activeLink = `/${this.location.path().split('/')[1]}`
  }
  goLink(link) {
    this.router.navigate([link])
    this.activeLink = link
  }
  openLoginDialog(): void {
    const dialogRef = this.loginDialog.open(LoginDialog, {
      width: '250px',
      data: {
        user: this.user
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result !== false) {
        this.user = result.user
        this.userService.login(this.user)
          .subscribe()
      }
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