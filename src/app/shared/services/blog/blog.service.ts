import { Injectable } from '@angular/core';
import { CreateArticleInterface } from 'src/app/data/interfaces/createArticle.interfcae';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor() {}

  createArticle(article: CreateArticleInterface) {}
}
