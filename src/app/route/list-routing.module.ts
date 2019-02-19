import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppCommonModule } from '../common/app-common.module'
import { CanActivateService } from '../service/can-activate.service'
import { ListComponent } from '../component/list/list.component'

const routes: Routes = [{ path: '', component: ListComponent, canActivate: [CanActivateService] }]

@NgModule({
  declarations: [ListComponent],
  imports: [AppCommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule {}
