import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guard/auth.guard';
import {LogoutComponent} from './public/logout/logout.component';
import {NotFoundComponent} from './shared-components/not-found/not-found.component';

const routes: Routes = [
  {path: '', loadChildren: './public/public.module#PublicModule'},
  {path: 'musseum', loadChildren: './routes/routes.module#RoutesModule', canActivate: [AuthGuard]},
  {path: 'logout', component: LogoutComponent},
  {path: '**', pathMatch: 'full', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
