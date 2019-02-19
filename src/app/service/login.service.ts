import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { HttpService } from './http.service'
import { loginApi, isLoginApi, logoutApi } from '../api/api'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router, private http: HttpService) {}

  isLogin(): Observable<any> {
    return this.http.get(isLoginApi)
  }

  login(username: string, password: string): Observable<any> {
    return this.http.get(loginApi, {
      params: {
        username,
        password
      }
    })
  }

  logout() {
    this.http.get(logoutApi).subscribe(() => {
      this.router.navigate(['login'])
    })
  }
}
