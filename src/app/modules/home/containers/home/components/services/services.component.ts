import { Component, OnInit } from '@angular/core';
import { homeServices } from 'src/app/data/const/home_services';

@Component({
  selector: 'home-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  constructor() {}

  homeServices = homeServices;

  ngOnInit(): void {}
}
