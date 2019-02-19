import { NgModule } from '@angular/core'
import { SpanHighLightDirective } from '../directive/span-high-light.directive'
import { TranslateModule } from '@ngx-translate/core'
import { PipeTestPipe } from '../pipe/pipe-test.pipe'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [SpanHighLightDirective, PipeTestPipe],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgZorroAntdModule,
    TranslateModule,
    SpanHighLightDirective,
    PipeTestPipe
  ]
})
export class AppCommonModule {}
