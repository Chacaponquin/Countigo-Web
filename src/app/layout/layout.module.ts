import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NavBarComponent, SideBarComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [NavBarComponent, SideBarComponent],
})
export class LayoutModule {}
