import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ErrorComponent } from '../component/4o4/error.component'
import { AppPreloadingStrategyService } from '../service/app-preloading-strategy.service'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', loadChildren: './login-routing.module#LoginRoutingModule', data: { preload: true } },
  { path: 'home', loadChildren: './home-routing.module#HomeRoutingModule', data: { preload: true } },
  { path: 'list', loadChildren: './list-routing.module#ListRoutingModule', data: { preload: true } },
  { path: 'detail/:id', loadChildren: './detail-routing.module#DetailRoutingModule', data: { preload: true } },
  { path: 'parent', loadChildren: './parent-routing.module#ParentRoutingModule', data: { preload: true } },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
  { path: '404', component: ErrorComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppPreloadingStrategyService })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
