import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldTestesComponent } from './old-testes.component';

describe('OldTestesComponent', () => {
  let component: OldTestesComponent;
  let fixture: ComponentFixture<OldTestesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldTestesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldTestesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
