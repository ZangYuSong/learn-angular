import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppCommonModule } from '../common/app-common.module'
import { CanActivateService } from '../service/can-activate.service'
import { ParentComponent } from '../component/parent/parent.component'
import { ChildrenComponent } from '../component/parent/children/children.component'

const routes: Routes = [{ path: '', component: ParentComponent, canActivate: [CanActivateService] }]

@NgModule({
  declarations: [ParentComponent, ChildrenComponent],
  imports: [AppCommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule {}
