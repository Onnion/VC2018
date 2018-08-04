import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnesplendiComponent } from './spinnesplendi.component';

describe('SpinnesplendiComponent', () => {
  let component: SpinnesplendiComponent;
  let fixture: ComponentFixture<SpinnesplendiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnesplendiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnesplendiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
