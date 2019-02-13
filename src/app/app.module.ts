import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './route/route.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './component/home/home.component'
import { ErrorComponent } from './component/4o4/error.component'
import { LoginComponent } from './component/login/login.component'

import { CanActivateService } from './service/can-activate.service'
import { LoginService } from './service/login.service'
import { InterceptorService } from './service/interceptor.service'

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrorComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    CanActivateService,
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
