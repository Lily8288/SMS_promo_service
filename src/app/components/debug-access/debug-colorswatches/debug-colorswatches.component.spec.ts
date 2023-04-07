import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugColorswatchesComponent } from './debug-colorswatches.component';

describe('DebugColorswatchesComponent', () => {
  let component: DebugColorswatchesComponent;
  let fixture: ComponentFixture<DebugColorswatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugColorswatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebugColorswatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
