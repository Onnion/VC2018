import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaparatorComponent } from './saparator.component';

describe('SaparatorComponent', () => {
  let component: SaparatorComponent;
  let fixture: ComponentFixture<SaparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
