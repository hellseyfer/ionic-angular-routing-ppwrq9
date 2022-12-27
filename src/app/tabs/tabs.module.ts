import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsPageComponent } from './tabs-page.component';
import { LoginComponent } from '../login/login.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  imports: [CommonModule, IonicModule, TabsRoutingModule],
  declarations: [TabsPageComponent, LoginComponent, SideMenuComponent],
})
export class TabsModule {}
