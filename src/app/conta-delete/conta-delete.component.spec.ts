import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaDeleteComponent } from './conta-delete.component';

describe('ContaDeleteComponent', () => {
  let component: ContaDeleteComponent;
  let fixture: ComponentFixture<ContaDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
