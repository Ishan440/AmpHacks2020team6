import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAdvisorsComponent } from './customer-advisors.component';

describe('CustomerAdvisorsComponent', () => {
  let component: CustomerAdvisorsComponent;
  let fixture: ComponentFixture<CustomerAdvisorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAdvisorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAdvisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
