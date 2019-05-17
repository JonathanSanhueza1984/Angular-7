import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Neof4listComponent } from './neof4list.component';

describe('Neof4listComponent', () => {
  let component: Neof4listComponent;
  let fixture: ComponentFixture<Neof4listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Neof4listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Neof4listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
