import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './route/route.module'

import { SpanHighLightDirective } from './directive/span-high-light.directive'

import { PipeTestPipe } from './pipe/pipe-test.pipe'

import { CanActivateService } from './service/can-activate.service'
import { LoginService } from './service/login.service'
import { InterceptorService } from './service/interceptor.service'
import { HttpService } from './service/http.service'
import { LoadingService } from './service/loading.service'

import { AppComponent } from './app.component'
import { HomeComponent } from './component/home/home.component'
import { ErrorComponent } from './component/4o4/error.component'
import { LoginComponent } from './component/login/login.component'
import { LoadingComponent } from './component/loading/loading.component'
import { LayoutComponent } from './component/layout/layout.component'
import { ListComponent } from './component/list/list.component'
import { DetailComponent } from './component/detail/detail.component'
import { DetailRightComponent } from './component/detail/detail-right/detail-right.component'
import { DetailLeftComponent } from './component/detail/detail-left/detail-left.component'
import { ParentComponent } from './component/parent/parent.component'
import { ChildrenComponent } from './component/parent/children/children.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    LoadingComponent,
    LayoutComponent,
    ListComponent,
    DetailComponent,
    DetailRightComponent,
    DetailLeftComponent,
    SpanHighLightDirective,
    ParentComponent,
    ChildrenComponent,
    PipeTestPipe
  ],
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
