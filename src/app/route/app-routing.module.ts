import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ErrorComponent } from '../component/4o4/error.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', loadChildren: './login-routing.module#LoginRoutingModule' },
  { path: 'home', loadChildren: './home-routing.module#HomeRoutingModule' },
  { path: 'list', loadChildren: './list-routing.module#ListRoutingModule' },
  { path: 'detail/:id', loadChildren: './detail-routing.module#DetailRoutingModule' },
  { path: 'parent', loadChildren: './parent-routing.module#ParentRoutingModule' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
  { path: '404', component: ErrorComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
