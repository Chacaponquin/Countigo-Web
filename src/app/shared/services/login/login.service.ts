import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import {
  UserInfInterface,
  UserObject,
} from 'src/app/data/interfaces/userInf.interface';
import { UserLoginInterface } from 'src/app/data/interfaces/userLogin.interface';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private userSvc: UserService) {}

  loginAdminUser(userLogin: UserLoginInterface): Observable<UserObject> {
    return this.http
      .put<UserInfInterface>(environment.routes.LOGIN_ADMIN, userLogin)
      .pipe(
        map(({ user }) => {
          this.userSvc.user.next(user);
          window.localStorage.setItem('token', user.token);
          return user;
        }),
        catchError((error, result) => {
          console.log(error);
          return result;
        })
      );
  }
}
