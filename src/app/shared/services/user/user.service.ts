import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, retry } from 'rxjs';
import { UserObject } from 'src/app/data/interfaces/userInf.interface';
import { environment } from 'src/environments/environment';
import { ClientMessageInterface } from '../../../data/interfaces/clientMessage.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = new BehaviorSubject<UserObject | null>(null);

  constructor(private http: HttpClient) {}

  sendClientMessage(message: ClientMessageInterface): Observable<any> {
    return this.http.post<any>(environment.routes.CLIENT_MESSAGE, message).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        throw new Error(error.error.error);
      })
    );
  }
}
