import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.less']
})
export class ParentComponent implements OnInit {
  public input: string
  public childrenValue: string

  constructor() {}

  ngOnInit() {}

  childrenValueFn(event: string) {
    this.childrenValue = event
  }
}
