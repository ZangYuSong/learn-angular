import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CanActivateService } from '../service/can-activate.service'
import { HomeComponent } from '../component/home/home.component'
import { ErrorComponent } from '../component/4o4/error.component'
import { LoginComponent } from '../component/login/login.component'
import { ListComponent } from '../component/list/list.component'
import { DetailComponent } from '../component/detail/detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [CanActivateService] },
  { path: 'list', component: ListComponent, canActivate: [CanActivateService] },
  { path: 'detail/:id', component: DetailComponent, canActivate: [CanActivateService] },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
  { path: '404', component: ErrorComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
