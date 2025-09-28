import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionsService } from '../../services/transactions.service';
import { OperationCodeService } from '../../services/operationCode.service';

@Component({
  selector: 'app-transaction-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-register.component.html',
  styleUrls: ['./transaction-register.component.css']
})
export class TransactionRegisterComponent implements OnInit{
  transaction = {
    numeroCuenta: 0,
    fechaTransaccion: '',
    monto: 0,
    codigoOperacion: 0
  };

  mensaje = '';
  loading = false;

  operationCodes: any[] = [];

  constructor(private transactionsService: TransactionsService, private operationCodeService: OperationCodeService) {}

  ngOnInit(): void {
    this.obtenerCodigosOperacion();
  }

  obtenerCodigosOperacion(): void {
    this.operationCodeService.getOperationCodes().subscribe({
      next: (res) => {
        this.operationCodes = res.data;
      },
      error: (err) => {
        console.error('Error al obtener códigos de operación', err);
      }
    });
  }

  crearTransaccion(): void {
    if (!this.transaction.numeroCuenta || !this.transaction.fechaTransaccion || 
        !this.transaction.monto || !this.transaction.codigoOperacion) {
      alert('Debe completar todos los campos');
      return;
    }

    this.loading = true;
    this.transactionsService.createTransaction(this.transaction).subscribe({
      next: (res) => {
        this.mensaje = 'Transacción creada con éxito';
        this.loading = false;
        this.transaction = { numeroCuenta: 0, fechaTransaccion: '', monto: 0, codigoOperacion: 0 };
      },
      error: (err) => {
        console.error('Error al crear transacción', err);
        this.mensaje = 'Error al crear transacción';
        this.loading = false;
      }
    });
  }
}
