import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppCommonModule } from '../common/app-common.module'
import { CanActivateService } from '../service/can-activate.service'
import { DetailComponent } from '../component/detail/detail.component'
import { DetailLeftComponent } from '../component/detail/detail-left/detail-left.component'
import { DetailRightComponent } from '../component/detail/detail-right/detail-right.component'

const routes: Routes = [
  {
    path: '',
    component: DetailComponent,
    canActivate: [CanActivateService],
    children: [
      {
        path: '',
        component: DetailLeftComponent,
        outlet: 'left'
      },
      {
        path: '',
        component: DetailRightComponent,
        outlet: 'right'
      }
    ]
  }
]

@NgModule({
  declarations: [DetailComponent, DetailLeftComponent, DetailRightComponent],
  imports: [AppCommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule {}
