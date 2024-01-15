import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListComponentsComponent } from './employees-list.components.component';

describe('EmployeesListComponentsComponent', () => {
  let component: EmployeesListComponentsComponent;
  let fixture: ComponentFixture<EmployeesListComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesListComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesListComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
