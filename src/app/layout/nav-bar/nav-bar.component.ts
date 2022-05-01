import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { navBarOptions } from 'src/app/data/const/navBarOptions';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  options = navBarOptions;

  ngOnInit(): void {}
}
