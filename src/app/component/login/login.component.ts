import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import UserState from '../../state/user.state'
import { LoginService } from '../../service/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  private username: string
  private password: string

  constructor(private router: Router, private login: LoginService) {}

  ngOnInit() {
    this.login.isLogin().subscribe(data => {
      if (data.status === 1) {
        UserState.isLogin = data
        this.router.navigate(['home'])
      }
    })
  }

  submitLogin() {
    if (!this.username || !this.password) {
      alert('请输入完成信息')
      return
    }
    this.login.login(this.username, this.password).subscribe(
      (data: any) => {
        UserState.isLogin = data
        if (data.status === 1) {
          this.router.navigate(['home'])
        } else {
          alert(data.message)
        }
      },
      e => {
        alert(e)
      }
    )
  }
}
