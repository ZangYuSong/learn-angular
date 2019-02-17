import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from '../../service/login.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private username = ''
  private password = ''
  private subscribeList: Array<Subscription> = []

  constructor(private router: Router, private login: LoginService) {}

  ngOnInit(): void {
    this.subscribeList.push(
      this.login.isLogin().subscribe((data: any) => {
        if (data.status === 1) {
          this.router.navigate(['home'])
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscribeList.map(item => {
      item.unsubscribe()
    })
  }

  submitLogin(): void {
    if (!this.username || !this.password) {
      alert('请输入完成信息')
      return
    }
    this.subscribeList.push(
      this.login.login(this.username, this.password).subscribe((data: any) => {
        if (data.status === 1) {
          this.router.navigate(['home'])
        } else {
          alert(data.message)
        }
      })
    )
  }
}
