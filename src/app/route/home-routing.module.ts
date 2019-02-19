import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppCommonModule } from '../common/app-common.module'
import { CanActivateService } from '../service/can-activate.service'
import { HomeComponent } from '../component/home/home.component'

const routes: Routes = [{ path: '', component: HomeComponent, canActivate: [CanActivateService] }]

@NgModule({
  declarations: [HomeComponent],
  imports: [AppCommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
