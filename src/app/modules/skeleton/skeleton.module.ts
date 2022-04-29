import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkeletonRoutingModule } from './skeleton-routing.module';
import { NavBarComponent } from 'src/app/layout/nav-bar/nav-bar.component';
import { SideBarComponent } from 'src/app/layout/side-bar/side-bar.component';
import { SkeletonComponent } from './containers/skeleton/skeleton.component';

@NgModule({
  declarations: [NavBarComponent, SideBarComponent, SkeletonComponent],
  imports: [CommonModule, SkeletonRoutingModule],
})
export class SkeletonModule {}
