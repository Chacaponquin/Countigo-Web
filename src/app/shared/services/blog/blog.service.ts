import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, tap } from 'rxjs';
import { CreateArticleInterface } from 'src/app/data/interfaces/createArticle.interfcae';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  createArticle(article: CreateArticleInterface): Observable<any> {
    const articleForm = new FormData();

    articleForm.append('title', article.title);
    for (let i = 0; i < article.images.length; i++) {
      articleForm.append('images', article.images[i]);
    }
    articleForm.append('htmlInput', article.htmlInput);
    articleForm.append('resume', article.resume);

    return this.http.post(environment.routes.CREATE_ARTICLE, articleForm).pipe(
      retry(2),
      tap(() => {}),
      catchError(() => {
        throw new Error('Hubo un error');
      })
    );
  }
}
