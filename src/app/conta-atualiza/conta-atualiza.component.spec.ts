import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaAtualizaComponent } from './conta-atualiza.component';

describe('ContaAtualizaComponent', () => {
  let component: ContaAtualizaComponent;
  let fixture: ComponentFixture<ContaAtualizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaAtualizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaAtualizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
