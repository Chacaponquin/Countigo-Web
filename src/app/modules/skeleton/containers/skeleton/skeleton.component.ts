import { Component, OnInit } from '@angular/core';
import { MenuInteractions } from 'src/app/data/const/menuInteractions.enum';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css'],
})
export class SkeletonComponent implements OnInit {
  constructor(private userSvc: UserService) {}

  showMenu: boolean = false;
  showIcon: boolean = false;

  ngOnInit(): void {
    this.userSvc.user.subscribe((user) => {
      this.showIcon = user ? true : false;
    });
  }

  menuIteraction(action: MenuInteractions): void {
    if (action === MenuInteractions.OPEN) this.showMenu = true;
    else this.showMenu = false;
  }
}
