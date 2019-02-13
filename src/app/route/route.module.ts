import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from '../component/home/home.component'
import { ErrorComponent } from '../component/4o4/error.component'
import { LoginComponent } from '../component/login/login.component'
import { routes as homeRouter } from './home.route'
import { CanActivateService } from '../service/can-activate.service'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, children: homeRouter, canActivate: [CanActivateService] },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
  { path: '404', component: ErrorComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
