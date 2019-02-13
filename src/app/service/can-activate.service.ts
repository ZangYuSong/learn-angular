import { CanActivate, Router } from '@angular/router'
import { Injectable } from '@angular/core'
import UserState from '../state/user.state'
import { LoginService } from './login.service'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate {
  constructor(private router: Router, private login: LoginService) {}

  canActivate(): boolean | Observable<any> {
    if (UserState.isLogin) {
      return true
    } else {
      return this.login.isLogin().pipe(
        map((data: any) => {
          if (data.status === 0) {
            this.router.navigate(['login'])
            return false
          }
          return true
        })
      )
    }
  }
}
