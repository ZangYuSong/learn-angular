import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from '../../service/login.service'
import {
  Subscription,
  of,
  interval,
  Observable,
  fromEvent,
  merge,
  zip,
  concat,
  range,
  timer,
  combineLatest,
  Subject,
  ReplaySubject
} from 'rxjs'
import {
  mergeMap,
  map,
  take,
  scan,
  switchMap,
  mapTo,
  bufferTime,
  concatMap,
  filter,
  takeUntil,
  debounceTime,
  distinctUntilChanged,
  pluck,
  startWith,
  withLatestFrom,
  tap,
  share,
  publish,
  multicast
} from 'rxjs/operators'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscribeList: Array<Subscription> = []
  validateForm: FormGroup

  constructor(private router: Router, private login: LoginService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.subscribeList.push(
      this.login.isLogin().subscribe((data: any) => {
        if (data) {
          this.router.navigate(['home'])
        }
      })
    )
    this.validateForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  ngOnDestroy(): void {
    this.subscribeList.map(item => {
      item.unsubscribe()
    })
  }

  submitForm() {
    const { controls, status, value } = this.validateForm
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        controls[key].markAsDirty()
        controls[key].updateValueAndValidity()
      }
    }
    if (status === 'VALID') {
      this.subscribeList.push(
        this.login.login(value.username, value.password).subscribe(() => {
          this.router.navigate(['home'])
        })
      )
    }
  }

  test() {
    // let result: any
    // result = of('a', 'b', 'c').pipe(
    //   mergeMap(x =>
    //     interval(1000).pipe(
    //       map(i => x + i),
    //       take(4)
    //     )
    //   )
    // )
    // result.subscribe(data => console.log(data))
    // result = of(1, 2, 3).pipe(scan((acc, one) => acc + one, 0))
    // result.subscribe(data => console.log(data))
    // result = interval(1000).pipe(
    //   take(20),
    //   bufferTime(3000)
    // )
    // result.subscribe(data => console.log(data))
    // result = of(1, 2, 3).pipe(concatMap(data => of(data)))
    // result.subscribe(data => console.log(data))
    // result = of(1, 2, 3, 4).pipe(filter(data => data > 2))
    // result.subscribe(data => console.log(data))
    // const dom = document.createElement('div')
    // document.getElementsByTagName('body')[0].appendChild(dom)
    // result = interval(1000).pipe(takeUntil(fromEvent(dom, 'click')))
    // setTimeout(() => {
    //   dom.click()
    //   dom.remove()
    // }, 10000)
    // result.subscribe(data => console.log(data))
    // result = fromEvent(document, 'click').pipe(debounceTime(3000))
    // result.subscribe(data => console.log(data))
    // result = of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4).pipe(distinctUntilChanged())
    // result.subscribe(data => console.log(data))
    // result = of(
    //   {
    //     id: '1',
    //     name: 'name1',
    //     obj: {
    //       sex: 'sex1'
    //     }
    //   },
    //   {
    //     id: '2',
    //     name: 'name2',
    //     obj: {
    //       sex: 'sex2'
    //     }
    //   }
    // ).pipe(pluck('obj', 'sex'))
    // result.subscribe(data => console.log(data))
    // result = merge(interval(1000).pipe(take(10)), interval(2000).pipe(take(6)), interval(500).pipe(take(10) )
    // result.subscribe(data => console.log(data))
    // result = merge(interval(1000).pipe(take(10)), interval(2000).pipe(take(6)), interval(500).pipe(take(10)), 2)
    // result.subscribe(data => console.log(data))
    // result = zip(of(1, 2, 3), of('a', 'b', 'c', 'd'), of(true, false))
    // result.subscribe(data => console.log(data))
    // result = concat(interval(1000).pipe(take(4)), range(1, 10))
    // result.subscribe(data => console.log(data))
    // result = of('from source').pipe(startWith('first', 'second'))
    // result.subscribe(data => console.log(data))
    // result = combineLatest(timer(0, 1000).pipe(take(5)), timer(500, 1000).pipe(take(5)))
    // result.subscribe(data => console.log(data))
    // result = fromEvent(document, 'click').pipe(withLatestFrom(interval(1000)))
    // result.subscribe(data => console.log(data))
    // result = fromEvent(document, 'click').pipe(
    //   tap(ev => console.log(ev)),
    //   map((ev: any) => ev.clientX)
    // )
    // result.subscribe(data => console.log(data))
    // // 冷 0 1 2 3 0 4 1 5 2 7 3 4 5 6 7
    // result = interval(1000).pipe(take(8))
    // result.subscribe(data => console.log(data))
    // setTimeout(() => {
    //   result.subscribe(data => console.log(data))
    // }, 3000)
    // // 热 0 1 2 3 3 4 4 5 5 6 6 7 7
    // result = interval(1000).pipe(
    //   take(8),
    //   share()
    // )
    // result.subscribe(data => console.log(data))
    // setTimeout(() => {
    //   result.subscribe(data => console.log(data))
    // }, 3000)
    // // 未指定 selector
    // result = interval(1000).pipe(
    //   take(8),
    //   publish()
    // )
    // result.subscribe(data => console.log(data))
    // setTimeout(() => {
    //   result.subscribe(data => console.log(data))
    //   result.connect()
    // }, 3000)
    // // 指定 selector，表象等同于 share
    // result = interval(1000).pipe(
    //   take(8),
    //   publish(multicasted$ => {
    //     // 在这里做一些额外的操作
    //     return multicasted$
    //   })
    // )
    // result.subscribe(data => console.log(data))
    // setTimeout(() => {
    //   result.subscribe(data => console.log(data))
    // }, 3000)
    // // 使用 Subject
    // result = interval(1000).pipe(
    //   take(8),
    //   multicast(() => new Subject())
    // )
    // result.subscribe(data => console.log(data))
    // setTimeout(() => {
    //   result.subscribe(data => console.log(data))
    //   result.connect()
    // }, 3000)
    // // 传入 selector
    // result = interval(1000).pipe(
    //   take(8),
    //   multicast(
    //     () => new Subject(),
    //     multicasted$ => {
    //       return multicasted$
    //     }
    //   )
    // )
    // result.subscribe(data => console.log(data))
    // setTimeout(() => {
    //   result.subscribe(data => console.log(data))
    // }, 3000)
    // // 使用 ReplaySubject
    // result = interval(1000).pipe(
    //   take(8),
    //   multicast(
    //     () => new ReplaySubject(2),
    //     multicasted$ => {
    //       return multicasted$
    //     }
    //   )
    //   // 输入的值表示缓冲的值。其他的订阅则是在其订阅的时候一次性返回缓冲的值
    //   // 0 1 2
    //   // 1 2 3 3
    //   // 2 3 4 4 4
    //   // 5 5 5
    //   // ...
    // )
    // result.subscribe(data => console.log(data))
    // setTimeout(() => {
    //   result.subscribe(data => console.log(data))
    // }, 3000)
    // setTimeout(() => {
    //   result.subscribe(data => console.log(data))
    // }, 4000)
  }
}
