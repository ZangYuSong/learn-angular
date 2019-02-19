import { NgModule } from '@angular/core'
import { SpanHighLightDirective } from '../directive/span-high-light.directive'
import { TranslateModule } from '@ngx-translate/core'
import { PipeTestPipe } from '../pipe/pipe-test.pipe'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [SpanHighLightDirective, PipeTestPipe],
  exports: [FormsModule, CommonModule, TranslateModule, SpanHighLightDirective, PipeTestPipe]
})
export class AppCommonModule {}
