import { Component, OnInit } from '@angular/core';
import { blogArticles } from 'src/app/data/const/blogs-article';

@Component({
  selector: 'blog-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css'],
})
export class AllArticlesComponent implements OnInit {
  constructor() {}

  blogArticles = blogArticles;

  ngOnInit(): void {}
}
