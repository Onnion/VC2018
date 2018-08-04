import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovedsComponent } from './aproveds.component';

describe('AprovedsComponent', () => {
  let component: AprovedsComponent;
  let fixture: ComponentFixture<AprovedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
