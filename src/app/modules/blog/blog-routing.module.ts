import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllArticlesComponent, NewArticleComponent } from './containers';

const routes: Routes = [
  { path: '', component: AllArticlesComponent },
  { path: 'newArticle', component: NewArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
