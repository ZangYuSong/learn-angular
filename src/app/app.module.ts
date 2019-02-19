import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { AppRoutingModule } from './route/app-routing.module'
import { AppCommonModule } from './common/app-common.module'
import { InterceptorService } from './service/interceptor.service'
import { AppComponent } from './app.component'
import { ErrorComponent } from './component/4o4/error.component'
import { LoadingComponent } from './component/loading/loading.component'
import { LayoutComponent } from './component/layout/layout.component'

@NgModule({
  declarations: [AppComponent, ErrorComponent, LoadingComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppCommonModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, '../assets/i18n/', '.json')
        },
        deps: [HttpClient]
      }
    })
  ],
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
