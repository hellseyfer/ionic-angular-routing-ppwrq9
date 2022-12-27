import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: SideMenuComponent,
    children: [
      {
        path: 'details',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../detail/detail.module').then((m) => m.DetailPageModule),
          },
        ],
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            component: LoginComponent,
          },
        ],
      },
      {
        path: '',
        redirectTo: '/app/tabs/details',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/app/tabs/details',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
