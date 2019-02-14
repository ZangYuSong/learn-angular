import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './route/route.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './component/home/home.component'
import { ErrorComponent } from './component/4o4/error.component'
import { LoginComponent } from './component/login/login.component'
import { LoadingComponent } from './component/loading/loading.component'

import { CanActivateService } from './service/can-activate.service'
import { LoginService } from './service/login.service'
import { InterceptorService } from './service/interceptor.service'
import { HttpService } from './service/http.service'
import { LoadingService } from './service/loading.service'

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrorComponent, LoginComponent, LoadingComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    CanActivateService,
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    HttpService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
