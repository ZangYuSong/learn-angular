import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { loginApi, isLoginApi, logoutApi } from '../api/api'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router, private http: HttpClient) {}

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
    this.http.get(logoutApi).subscribe(
      (data: any) => {
        if (data.status === 1) {
          this.router.navigate(['login'])
        } else {
          alert(data.message)
        }
      },
      (e: any) => {
        alert(e.message)
      }
    )
  }
}
