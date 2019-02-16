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
  selector: 'app-detail-left',
  templateUrl: './detail-left.component.html',
  styleUrls: ['./detail-left.component.scss']
})
export class DetailLeftComponent
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
    console.log('detail-left constructor')
  }

  ngOnChanges() {
    console.log('detail-left ngOnChanges')
  }

  ngOnInit() {
    console.log('detail-left ngOnInit')
  }

  ngDoCheck() {
    console.log('detail-left ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('detail-left ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('detail-left ngAfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('detail-left ngAfterViewInit')
  }

  ngAfterViewChecked() {
    console.log('detail-left ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('detail-left ngOnDestroy')
  }
}
