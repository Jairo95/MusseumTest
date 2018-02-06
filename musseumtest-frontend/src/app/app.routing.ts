import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: './public/public.module#PublicModule'},
  {path: 'musseum', loadChildren: './routes/routes.module#RoutesModule', canActivate: [AuthGuard]},
  { path: '**', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
