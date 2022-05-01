import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserObject } from 'src/app/data/interfaces/userInf.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = new BehaviorSubject<UserObject | null>(null);

  constructor() {}
}
