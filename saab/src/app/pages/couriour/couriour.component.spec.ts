import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouriourComponent } from './couriour.component';

describe('CouriourComponent', () => {
  let component: CouriourComponent;
  let fixture: ComponentFixture<CouriourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouriourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouriourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
