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

@Component({
  selector: 'app-detail-right',
  templateUrl: './detail-right.component.html',
  styleUrls: ['./detail-right.component.less']
})
export class DetailRightComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  constructor() {
    console.log('detail-right constructor')
  }

  ngOnChanges() {
    console.log('detail-right ngOnChanges')
  }

  ngOnInit() {
    console.log('detail-right ngOnInit')
  }

  ngDoCheck() {
    console.log('detail-right ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('detail-right ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('detail-right ngAfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('detail-right ngAfterViewInit')
  }

  ngAfterViewChecked() {
    console.log('detail-right ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('detail-right ngOnDestroy')
  }
}
