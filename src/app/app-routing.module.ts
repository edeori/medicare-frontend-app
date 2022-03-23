import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
      path: '',
      canActivate: [AuthGuard],
      component: LayoutComponent,
    },
    {
      path: '**',
      redirectTo: ''
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}