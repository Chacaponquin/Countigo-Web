import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { homeServices } from 'src/app/data/const/home_services';

import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
  selector: 'home-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesComponent implements OnInit {
  constructor() {}

  homeServices = homeServices;

  ngOnInit(): void {}
}
