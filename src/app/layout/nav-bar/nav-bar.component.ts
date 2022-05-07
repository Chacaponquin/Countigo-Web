import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs';
import { MenuInteractions } from 'src/app/data/const/menuInteractions.enum';
import { navBarOptions } from 'src/app/data/const/navBarOptions';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @Input() showIcon: boolean = false;
  @Output() openEmitter = new EventEmitter<MenuInteractions>();

  constructor(private router: Router) {}

  options = navBarOptions;
  faMenu = faBars;
  actualUrl: any = this.router.url;

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.actualUrl = event['url'];
      });
  }

  openMenu(): void {
    this.openEmitter.emit(MenuInteractions.OPEN);
  }
}
