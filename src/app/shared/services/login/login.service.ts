import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, interval, map, Observable, retry } from 'rxjs';
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
      .post<UserInfInterface>(environment.routes.LOGIN_ADMIN, userLogin)
      .pipe(
        retry(2),
        map(({ user }) => {
          this.userSvc.user.next(user);
          window.localStorage.setItem('token', user.token);

          return user;
        }),
        catchError((error: HttpErrorResponse) => {
          throw new Error(error.error.error);
        })
      );
  }
}
