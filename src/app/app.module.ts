import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './route/route.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './component/home/home.component'
import { ErrorComponent } from './component/4o4/error.component'
import { LoginComponent } from './component/login/login.component'

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrorComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
