import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentListComponentsComponent } from './department-list.components.component';

describe('DepartmentListComponentsComponent', () => {
  let component: DepartmentListComponentsComponent;
  let fixture: ComponentFixture<DepartmentListComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentListComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentListComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
