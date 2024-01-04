import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCaseWorkerComponent } from './edit-case-worker.component';

describe('EditCaseWorkerComponent', () => {
  let component: EditCaseWorkerComponent;
  let fixture: ComponentFixture<EditCaseWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCaseWorkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCaseWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
