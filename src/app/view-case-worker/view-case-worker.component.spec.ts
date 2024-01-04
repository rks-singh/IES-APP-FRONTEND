import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCaseWorkerComponent } from './view-case-worker.component';

describe('ViewCaseWorkerComponent', () => {
  let component: ViewCaseWorkerComponent;
  let fixture: ComponentFixture<ViewCaseWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCaseWorkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCaseWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
