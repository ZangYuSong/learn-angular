import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from '../../service/login.service'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  private local = 'zh'

  constructor(private router: Router, private login: LoginService, private translate: TranslateService) {}

  ngOnInit() {
    this.setLoacl()
  }

  setLoacl() {
    this.translate.setDefaultLang(this.local)
  }

  resetLocal() {
    if (this.local === 'en') {
      this.local = 'zh'
    } else {
      this.local = 'en'
    }
    this.setLoacl()
  }

  logout() {
    this.login.logout()
  }
}
