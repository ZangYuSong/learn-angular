import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.less']
})
export class ChildrenComponent implements OnInit {
  childernInput: string

  @Input() parentInput: string

  @Output() childrenValue = new EventEmitter<string>()

  constructor() {}

  ngOnInit() {}

  inputChange(event) {
    this.childrenValue.emit(event)
  }
}
