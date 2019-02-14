import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { LoadingService } from './loading.service'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient, private loading: LoadingService) {}

  processing(http: Observable<any>): Observable<any> {
    this.loading.next(true)
    return http.pipe(
      map(data => {
        this.loading.next(false)
        return data
      }),
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
