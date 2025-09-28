import { Routes } from '@angular/router';
import { AccountsComponent } from './features/accounts/accounts.component';
import { TransactionRegisterComponent } from './features/transactions/transaction-register/transaction-register.component';
import { TransactionByClientComponent } from './features/transactions/transaction-by-client/transaction-by-client.component';

export const routes: Routes = [
  { path: '', redirectTo: '/accounts', pathMatch: 'full' },
  { path: 'accounts', component: AccountsComponent },
  { path: 'transactions/register', component: TransactionRegisterComponent },
  { path: 'transactions/by-client', component: TransactionByClientComponent },
  { path: '**', redirectTo: '/accounts' },
];
