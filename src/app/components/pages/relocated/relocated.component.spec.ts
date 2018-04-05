import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelocatedComponent } from './relocated.component';

describe('RelocatedComponent', () => {
  let component: RelocatedComponent;
  let fixture: ComponentFixture<RelocatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelocatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelocatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
