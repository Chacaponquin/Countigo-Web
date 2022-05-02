import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { homeServices } from 'src/app/data/const/home_services';

@Component({
  selector: 'home-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  constructor() {}

  cont$: BehaviorSubject<number> = new BehaviorSubject(0);
  homeServices = homeServices;
  selectService: number = this.homeServices[0].id;

  ngOnInit(): void {
    this.cont$.subscribe(
      (value) => (this.selectService = this.homeServices[value].id)
    );

    setInterval(() => {
      this.cont$.value + 1 === this.homeServices.length
        ? this.cont$.next(0)
        : this.cont$.next(this.cont$.value + 1);
    }, 4000);
  }
}
