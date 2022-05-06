import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers';
import { SwiperModule } from 'swiper/angular';
import homeComponents from './containers';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, ...homeComponents],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class HomeModule {}
