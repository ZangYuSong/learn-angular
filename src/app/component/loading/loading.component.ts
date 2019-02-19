import { Component, OnInit } from '@angular/core'
import { LoadingService } from '../../service/loading.service'

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less']
})
export class LoadingComponent implements OnInit {
  public isShow = false

  constructor(private loading: LoadingService) {}

  ngOnInit() {
    this.loading.getObservable().subscribe(loading => (this.isShow = loading))
  }
}
