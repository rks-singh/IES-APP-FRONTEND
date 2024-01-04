import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseWorkerComponent } from './create-case-worker.component';

describe('CreateCaseWorkerComponent', () => {
  let component: CreateCaseWorkerComponent;
  let fixture: ComponentFixture<CreateCaseWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCaseWorkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCaseWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
