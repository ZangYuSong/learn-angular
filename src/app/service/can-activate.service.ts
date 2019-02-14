import { CanActivate, Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { LoginService } from './login.service'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate {
  constructor(private router: Router, private login: LoginService) {}

  canActivate(): boolean | Observable<any> {
    return this.login.isLogin().pipe(
      map((data: any) => {
        if (data.status === 0) {
          this.router.navigate(['login'])
        }
        return data.status === 1
      })
    )
  }
}
