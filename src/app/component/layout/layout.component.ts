import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { registerLocaleData } from '@angular/common'
import zh from '@angular/common/locales/zh'
import en from '@angular/common/locales/en'
import { LoginService } from '../../service/login.service'
import { TranslateService } from '@ngx-translate/core'
import { zh_CN, en_US, NzI18nService } from 'ng-zorro-antd'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  private local = 'zh'

  constructor(
    public router: Router,
    private login: LoginService,
    private translate: TranslateService,
    private nzI18n: NzI18nService
  ) {}

  ngOnInit() {
    this.setLoacl()
  }

  setLoacl() {
    registerLocaleData(this.local === 'en' ? en : zh)
    this.nzI18n.setLocale(this.local === 'en' ? en_US : zh_CN)
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

  isShow() {
    return !this.router.isActive('/login', true) && !this.router.isActive('/404', true)
  }

  isSelected(path) {
    return this.router.isActive(path, true)
  }
}
