import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
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
    this.login.isLogin().subscribe((data: any) => {
      if (data.status === 1) {
        this.router.navigate(['home'])
      }
    })
  }

  submitLogin() {
    if (!this.username || !this.password) {
      alert('请输入完成信息')
      return
    }
    this.login.login(this.username, this.password).subscribe((data: any) => {
      if (data.status === 1) {
        this.router.navigate(['home'])
      } else {
        alert(data.message)
      }
    })
  }
}
