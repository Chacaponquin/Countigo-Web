import { AllArticlesComponent } from './all-articles/all-articles.component';
import { ArticleCardComponent } from './all-articles/components/article-card/article-card.component';
import { BlogHeaderComponent } from './all-articles/components/blog-header/blog-header.component';
import { ArticleComponent } from './article/article.component';
import { ArticleContentComponent } from './article/components/article-content/article-content.component';
import { CommentCardComponent } from './article/components/comment-card/comment-card.component';
import { CommentInputComponent } from './article/components/comment-input/comment-input.component';
import { NewArticleComponent } from './new-article/new-article.component';

export default [
  AllArticlesComponent,
  NewArticleComponent,
  BlogHeaderComponent,
  ArticleCardComponent,
  ArticleCardComponent,
  ArticleComponent,
  CommentCardComponent,
  ArticleContentComponent,
  CommentInputComponent,
];

export { AllArticlesComponent, NewArticleComponent, ArticleComponent };
