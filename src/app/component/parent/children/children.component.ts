import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
  private input: string

  @Input() parentValue: string

  @Output() childrenValue = new EventEmitter<string>()

  constructor() {}

  ngOnInit() {}

  inputChange(event) {
    this.childrenValue.emit(event)
  }
}
