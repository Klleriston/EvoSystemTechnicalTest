import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepartmentComponentsComponent } from './edit-department.components.component';

describe('EditDepartmentComponentsComponent', () => {
  let component: EditDepartmentComponentsComponent;
  let fixture: ComponentFixture<EditDepartmentComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDepartmentComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDepartmentComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
