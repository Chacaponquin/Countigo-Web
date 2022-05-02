import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers';
import { SwiperModule } from 'swiper/angular';
import homeComponents from './containers';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HomeComponent, ...homeComponents],
  imports: [CommonModule, HomeRoutingModule, SwiperModule, FontAwesomeModule],
})
export class HomeModule {}
