import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  private subscribeList: Array<Subscription> = []
  private routerParams: Params

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscribeList.push(this.route.params.subscribe(params => (this.routerParams = params)))
  }

  ngOnDestroy(): void {
    this.subscribeList.map(item => {
      item.unsubscribe()
    })
  }

  getKeys() {
    return Object.keys(this.routerParams)
  }
}
