import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accounts',
  imports: [CommonModule],
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  standalone: true,
})
export class AccountsComponent implements OnInit {
  accounts: any[] = [];
  loading = true;

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {
    this.accountsService.getAccounts().subscribe({
      next: (res) => {
        this.accounts = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar cuentas', err);
        this.loading = false;
      }
    });
  }
}
