import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { MenuInteractions } from 'src/app/data/const/menuInteractions.enum';
import { sideBarOptions } from 'src/app/data/const/sideBarOptions';

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
  sideBarOptions = sideBarOptions;
  openModal: string = '';

  ngOnInit(): void {}

  closeMenu(): void {
    this.closeEmitter.emit(MenuInteractions.CLOSE);
  }

  selectModal(id: string): void {
    if (this.openModal == id) this.openModal = '';
    else this.openModal = id;
  }
}
