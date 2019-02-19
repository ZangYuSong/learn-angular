import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs'
import { catchError, switchMap } from 'rxjs/operators'
import { LoadingService } from './loading.service'
import { NzNotificationService } from 'ng-zorro-antd'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient, private loading: LoadingService, private notifition: NzNotificationService) {}

  processing(http: Observable<any>): Observable<any> {
    this.loading.next(true)
    return http.pipe(
      switchMap(data => {
        this.loading.next(false)
        if (data.status === 1) {
          return of(data.data)
        }
        return throwError(data)
      }),
      catchError((e: any) => {
        this.notifition.error('错误', e.message)
        return throwError(e)
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
