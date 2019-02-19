import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  public list = [
    {
      id: 2,
      label: 'detail 2'
    },
    {
      id: 3,
      label: 'detail 3'
    },
    {
      id: 4,
      label: 'detail 4'
    }
  ]

  constructor(private router: Router) {}

  ngOnInit() {}

  goto(id) {
    this.router.navigate(['/detail/' + id])
  }

  trackByFn(index, item) {
    return item.id
  }
}
