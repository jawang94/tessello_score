import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricWeightsComponent } from './metric-weights.component';

describe('MetricWeightsComponent', () => {
  let component: MetricWeightsComponent;
  let fixture: ComponentFixture<MetricWeightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricWeightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricWeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
