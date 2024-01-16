import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmentComponentComponent } from './add-department.component.component';

describe('AddDepartmentComponentComponent', () => {
  let component: AddDepartmentComponentComponent;
  let fixture: ComponentFixture<AddDepartmentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDepartmentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDepartmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
