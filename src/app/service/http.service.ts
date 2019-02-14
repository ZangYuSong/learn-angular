import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs'
import { catchError, switchMap } from 'rxjs/operators'
import { isLoginApi } from '../api/api'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  processing(http: Observable<any>): Observable<any> {
    return http.pipe(
      // switchMap(data => {
      //   if (data.status !== 1) {
      //     return throwError(data)
      //   }
      //   return of(data.data)
      // }),
      catchError((e: any) => {
        alert(e.message)
        return e
      })
    )
  }

  request(method: string, url: string, options?: object): Observable<any> {
    return this.processing(this.http.request(method, url, options))
  }

  delete(url: string, options?: object): Observable<any> {
    return this.processing(this.http.delete(url, options))
  }

  get(url: string, options?: object): Observable<any> {
    return this.processing(this.http.get(url, options))
  }

  head(url: string, options?: object): Observable<any> {
    return this.processing(this.http.head(url, options))
  }

  jsonp(url: string, callbackParam: string): Observable<any> {
    return this.processing(this.http.jsonp(url, callbackParam))
  }

  options(url: string, options?: object): Observable<any> {
    return this.processing(this.http.options(url, options))
  }

  patch(url: string, body: any | null, options?: object): Observable<any> {
    return this.processing(this.http.patch(url, body, options))
  }

  post(url: string, body: any | null, options?: object): Observable<any> {
    return this.processing(this.http.post(url, body, options))
  }

  put(url: string, body: any | null, options?: object): Observable<any> {
    return this.processing(this.http.put(url, body, options))
  }
}
