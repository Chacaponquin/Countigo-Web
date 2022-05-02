import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faClose,
  faNoteSticky,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { MenuInteractions } from 'src/app/data/const/menuInteractions.enum';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  @Input() showMenu: boolean = false;
  @Output() closeEmitter = new EventEmitter<MenuInteractions>();

  constructor() {}

  faClose = faClose;
  faNote = faNoteSticky;
  faServices = faShoppingCart;

  ngOnInit(): void {}

  closeMenu(): void {
    this.closeEmitter.emit(MenuInteractions.CLOSE);
  }
}
