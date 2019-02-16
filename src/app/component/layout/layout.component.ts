import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from '../../service/login.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [LoginService]
})
export class LayoutComponent implements OnInit {
  constructor(private router: Router, private login: LoginService) {}

  ngOnInit() {}

  logout() {
    this.login.logout()
  }
}
