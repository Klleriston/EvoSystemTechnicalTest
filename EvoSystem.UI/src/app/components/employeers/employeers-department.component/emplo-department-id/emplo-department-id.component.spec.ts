import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploDepartmentIDComponent } from './emplo-department-id.component';

describe('EmploDepartmentIDComponent', () => {
  let component: EmploDepartmentIDComponent;
  let fixture: ComponentFixture<EmploDepartmentIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploDepartmentIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploDepartmentIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
