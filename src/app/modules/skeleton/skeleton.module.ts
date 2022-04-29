import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonRoutingModule } from './skeleton-routing.module';
import { SkeletonComponent } from './containers/skeleton/skeleton.component';
import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  declarations: [SkeletonComponent],
  imports: [CommonModule, SkeletonRoutingModule, LayoutModule],
})
export class SkeletonModule {}
