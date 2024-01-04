import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCaseWorkerComponent } from './delete-case-worker.component';

describe('DeleteCaseWorkerComponent', () => {
  let component: DeleteCaseWorkerComponent;
  let fixture: ComponentFixture<DeleteCaseWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCaseWorkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCaseWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
