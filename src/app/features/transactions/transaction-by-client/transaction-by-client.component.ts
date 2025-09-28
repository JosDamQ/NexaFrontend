import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-transaction-by-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-by-client.component.html',
  styleUrls: ['./transaction-by-client.component.css']
})
export class TransactionByClientComponent {
  codigoCliente: number = 0;
  fechaInicio: string = '';
  fechaFin: string = '';
  transactions: any[] = [];
  loading = false;

  constructor(private transactionsService: TransactionsService) {}

  buscarTransacciones(): void {
    if (!this.codigoCliente || !this.fechaInicio || !this.fechaFin) {
      alert('Debe ingresar todos los datos');
      return;
    }

    this.loading = true;
    this.transactionsService.getTransactionsByClient(this.codigoCliente, this.fechaInicio, this.fechaFin)
      .subscribe({
        next: (res) => {
          this.transactions = res.data;
          this.loading = false;
          console.log(this.transactions, 'transacciones');
        },
        error: (err) => {
          console.error('Error al buscar transacciones', err);
          this.loading = false;
        }
      });
  }
}

