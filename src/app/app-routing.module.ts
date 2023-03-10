import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

/**
 * In this file we set up the main routes within our application
 * We have multiple options available to us for routing
 *
 * Route to a specific component
 * Route to a lazy-loaded module
 * Redirect to a predefined route
 *
 * We can see an example of each below
 */

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
