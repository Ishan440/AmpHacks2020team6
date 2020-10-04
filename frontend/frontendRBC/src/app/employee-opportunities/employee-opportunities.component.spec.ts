import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOpportunitiesComponent } from './employee-opportunities.component';

describe('EmployeeOpportunitiesComponent', () => {
  let component: EmployeeOpportunitiesComponent;
  let fixture: ComponentFixture<EmployeeOpportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeOpportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
