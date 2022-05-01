import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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

  constructor() {}

  options = navBarOptions;
  faMenu = faBars;

  ngOnInit(): void {}

  openMenu(): void {
    this.openEmitter.emit(MenuInteractions.OPEN);
  }
}
