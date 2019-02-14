import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

const subject: Subject<any> = new Subject<any>()

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  getObservable(): Observable<any> {
    return subject.asObservable()
  }

  next(loading: boolean) {
    subject.next(loading)
  }
}
