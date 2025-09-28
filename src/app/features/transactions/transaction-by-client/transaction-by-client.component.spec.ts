import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionByClientComponent } from './transaction-by-client.component';

describe('TransactionByClientComponent', () => {
  let component: TransactionByClientComponent;
  let fixture: ComponentFixture<TransactionByClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionByClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
