import { Component, OnInit } from '@angular/core'
import { Router, NavigationEnd, NavigationStart } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('NavigationStart')
      } else if (event instanceof NavigationEnd) {
        console.log('NavigationEnd')
      }
    })
  }
}
