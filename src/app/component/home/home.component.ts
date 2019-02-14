import { Component, OnInit } from '@angular/core'
import { LoginService } from '../../service/login.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LoginService]
})
export class HomeComponent implements OnInit {
  constructor(private login: LoginService) {}

  ngOnInit(): void {}

  logout() {
    this.login.logout()
  }
}
