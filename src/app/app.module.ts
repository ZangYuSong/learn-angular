import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './route/app-routing.module'
import { AppCommonModule } from './app-common.module'
import { InterceptorService } from './service/interceptor.service'
import { AppComponent } from './app.component'
import { ErrorComponent } from './component/4o4/error.component'
import { LoadingComponent } from './component/loading/loading.component'
import { LayoutComponent } from './component/layout/layout.component'

@NgModule({
  declarations: [AppComponent, ErrorComponent, LoadingComponent, LayoutComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AppCommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
