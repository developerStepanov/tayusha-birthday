import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPointComponent } from './enter-point.component';

describe('EnterPointComponent', () => {
  let component: EnterPointComponent;
  let fixture: ComponentFixture<EnterPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
