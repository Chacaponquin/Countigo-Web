import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticleComponent implements OnInit {
  constructor() {}

  allComments = [1, 2];
  ngOnInit(): void {}
}
