import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICredential } from '../_interfaces/credential';
import { IToken } from '../_interfaces/token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8000/auth/login';

  constructor(private httpClient: HttpClient) { }

  login(credentials: ICredential): Observable<IToken> {
    return this.httpClient.post<IToken>(this.url, credentials);
  }
}
