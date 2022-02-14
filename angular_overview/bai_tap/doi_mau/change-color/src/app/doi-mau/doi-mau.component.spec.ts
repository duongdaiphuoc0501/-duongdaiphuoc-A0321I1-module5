import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoiMauComponent } from './doi-mau.component';

describe('DoiMauComponent', () => {
  let component: DoiMauComponent;
  let fixture: ComponentFixture<DoiMauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoiMauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoiMauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
