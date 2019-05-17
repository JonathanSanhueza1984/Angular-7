import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgresqlinfoComponent } from './postgresqlinfo.component';

describe('PostgresqlinfoComponent', () => {
  let component: PostgresqlinfoComponent;
  let fixture: ComponentFixture<PostgresqlinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostgresqlinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgresqlinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
