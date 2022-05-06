import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-succes-message',
  templateUrl: './succes-message.component.html',
  styleUrls: ['./succes-message.component.css'],
})
export class SuccesMessageComponent implements OnInit {
  @Input() className: string = '';
  @Input() message: string = '';

  constructor() {}

  ngOnInit(): void {}
}
