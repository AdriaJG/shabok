import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorBarrasComponent } from './lector-barras.component';

describe('LectorBarrasComponent', () => {
  let component: LectorBarrasComponent;
  let fixture: ComponentFixture<LectorBarrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectorBarrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectorBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
