import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private apiUrl = `${environment.BASE_URL}/api/v1/accounts`;

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache'} });
  }
}
