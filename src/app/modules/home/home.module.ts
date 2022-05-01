import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers';
import homeComponents from './containers';

@NgModule({
  declarations: [HomeComponent, ...homeComponents],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
