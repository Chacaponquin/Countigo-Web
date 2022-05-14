import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-article-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css'],
})
export class CommentCardComponent implements OnInit {
  constructor() {}

  replies = [1, 2];

  ngOnInit(): void {}
}
