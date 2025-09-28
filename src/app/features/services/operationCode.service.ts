import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationCodeService {

  private apiUrl = `${environment.BASE_URL}/api/v1/operation-codes`;

  constructor(private http: HttpClient) {}

  getOperationCodes(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache'} });
  }
}