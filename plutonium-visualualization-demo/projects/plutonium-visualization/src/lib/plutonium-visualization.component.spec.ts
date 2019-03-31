import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlutoniumVisualizationComponent } from './plutonium-visualization.component';

describe('PlutoniumVisualizationComponent', () => {
  let component: PlutoniumVisualizationComponent;
  let fixture: ComponentFixture<PlutoniumVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlutoniumVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlutoniumVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
