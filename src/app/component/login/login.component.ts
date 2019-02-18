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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private username = ''
  private password = ''
  private subscribeList: Array<Subscription> = []

  constructor(private router: Router, private login: LoginService) {}

  ngOnInit(): void {
    this.subscribeList.push(
      this.login.isLogin().subscribe((data: any) => {
        if (data.status === 1) {
          this.router.navigate(['home'])
        }
      })
    )
    // fromEvent(document, 'click')
    //   .pipe(
    //     switchMap(() => {
    //       return interval(1000).pipe(take(3))
    //     })
    //   )
    //   .subscribe(data => console.log(data))
  }

  ngOnDestroy(): void {
    this.subscribeList.map(item => {
      item.unsubscribe()
    })
  }

  submitLogin(): void {
    if (!this.username || !this.password) {
      alert('请输入完成信息')
      return
    }
    this.subscribeList.push(
      this.login.login(this.username, this.password).subscribe((data: any) => {
        if (data.status === 1) {
          this.router.navigate(['home'])
        } else {
          alert(data.message)
        }
      })
    )
  }

  test() {
    let result: any
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

    // 使用 Subject
    // result = interval(1000).pipe(
    //   take(8),
    //   multicast(() => new Subject())
    // )
    // result.subscribe(data => console.log(data))
    // setTimeout(() => {
    //   result.subscribe(data => console.log(data))
    //   result.connect()
    // }, 3000)
    // 传入 selector
    result = interval(1000).pipe(
      take(8),
      multicast(
        () => new Subject(),
        multicasted$ => {
          return multicasted$
        }
      )
    )
    result.subscribe(data => console.log(data))
    setTimeout(() => {
      result.subscribe(data => console.log(data))
    }, 3000)
    // 使用 ReplaySubject
    result = interval(1000).pipe(
      take(8),
      multicast(
        () => new ReplaySubject(2),
        multicasted$ => {
          return multicasted$
        }
      )
      // 输入的值表示缓冲的值。其他的订阅则是在其订阅的时候一次性返回缓冲的值
      // 0 1 2
      // 1 2 3 3
      // 2 3 4 4 4
      // 5 5 5
      // ...
    )
    result.subscribe(data => console.log(data))
    setTimeout(() => {
      result.subscribe(data => console.log(data))
    }, 3000)
    setTimeout(() => {
      result.subscribe(data => console.log(data))
    }, 4000)
  }
}
