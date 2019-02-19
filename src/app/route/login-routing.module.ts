import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppCommonModule } from '../common/app-common.module'
import { LoginComponent } from '../component/login/login.component'

const routes: Routes = [{ path: '', component: LoginComponent }]

@NgModule({
  declarations: [LoginComponent],
  imports: [AppCommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
