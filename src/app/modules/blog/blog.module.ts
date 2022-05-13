import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import blogContainers from './containers';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogHeaderComponent } from './containers/all-articles/components/blog-header/blog-header.component';

@NgModule({
  declarations: [...blogContainers],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,

    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    SharedModule,
  ],
})
export class BlogModule {}
