import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AUTO_STYLE,
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('collapse', [
      state('true', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state(
        'false',
        style({ height: '0', visibility: 'hidden', opacity: '0' })
      ),
      transition('false => true', animate(300 + 'ms ease-in')),
      transition('true => false', animate(300 + 'ms ease-out')),
    ]),
  ],
})
export class ModalComponent implements OnInit {
  @Input() option: any;
  @Input() openModal: boolean = false;
  @Output() modalEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  selectModal(id: string) {
    this.modalEvent.emit(id);
  }
}
