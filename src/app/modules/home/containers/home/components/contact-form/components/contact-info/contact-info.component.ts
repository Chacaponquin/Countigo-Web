import { Component, OnInit } from '@angular/core';
import { contactInf } from 'src/app/data/const/contact-inf';
import { socialMedia } from 'src/app/data/const/socialMedia';

@Component({
  selector: 'home-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
})
export class ContactInfoComponent implements OnInit {
  constructor() {}

  contactInf = contactInf;
  socialMedia = socialMedia;

  ngOnInit(): void {}
}
