import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private baseUrl = `${environment.BASE_URL}/api/v1/transactions`;

  constructor(private http: HttpClient) {}

  createTransaction(transaction: any): Observable<any> {
    try {
      return this.http.post(this.baseUrl, transaction);
    } catch (error) {
      console.error('Error al crear la transacción', error);
      throw error;
    }
  }

  getTransactionsByClient(codigoCliente: number, fechaInicio: string, fechaFin: string): Observable<any> {
    try {
      const params = new HttpParams()
        .set('codigoCliente', codigoCliente)
        .set('fechaInicio', fechaInicio)
        .set('fechaFin', fechaFin);

      return this.http.get(`${this.baseUrl}/by-client`, { params });
    } catch (error) {
      console.error('Error al buscar transacciones por cliente', error);
      throw error;
    }
    
  }
}
