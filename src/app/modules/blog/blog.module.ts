import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import blogContainers from './containers';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [...blogContainers],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    SharedModule,
    AngularEditorModule,
  ],
})
export class BlogModule {}
