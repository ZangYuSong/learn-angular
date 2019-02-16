import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  private subscribeList: Array<Subscription> = []
  private routerParams: Params

  constructor(private route: ActivatedRoute) {
    console.log('parent constructor')
  }

  ngOnChanges() {
    console.log('parent ngOnChanges')
  }

  ngOnInit() {
    console.log('parent ngOnInit')
    this.subscribeList.push(this.route.params.subscribe(params => (this.routerParams = params)))
  }

  ngDoCheck() {
    console.log('parent ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('parent ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('parent ngAfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('parent ngAfterViewInit')
  }

  ngAfterViewChecked() {
    console.log('parent ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('parent ngOnDestroy')
    this.subscribeList.map(item => {
      item.unsubscribe()
    })
  }

  getKeys() {
    return Object.keys(this.routerParams)
  }
}
// 开始
// parent constructor
// detail-left constructor
// detail-right constructor

// 父类加载到 ngAfterContentChecked
// parent ngOnInit
// parent ngDoCheck
// parent ngAfterContentInit
// parent ngAfterContentChecked

// 子类完全加载完毕
// detail-left ngOnInit
// detail-left ngDoCheck
// detail-left ngAfterContentInit
// detail-left ngAfterContentChecked
// detail-left ngAfterViewInit
// detail-left ngAfterViewChecked
// detail-right ngOnInit
// detail-right ngDoCheck
// detail-right ngAfterContentInit
// detail-right ngAfterContentChecked
// detail-right ngAfterViewInit
// detail-right ngAfterViewChecked

// 父类加载完毕
// parent ngAfterViewInit
// parent ngAfterViewChecked

// 父类发生变化
// parent ngDoCheck
// parent ngAfterContentChecked

// 子类变化并更新完毕
// detail-left ngDoCheck
// detail-left ngAfterContentChecked
// detail-left ngAfterViewChecked
// detail-right ngDoCheck
// detail-right ngAfterContentChecked
// detail-right ngAfterViewChecked

// 父类更新完毕
// parent ngAfterViewChecked

// 子类注销完毕
// detail-left ngOnDestroy
// detail-right ngOnDestroy

// 父类注销完毕
// parent ngOnDestroy
