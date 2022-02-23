import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoKhachHangComponent } from './tao-khach-hang.component';

describe('TaoKhachHangComponent', () => {
  let component: TaoKhachHangComponent;
  let fixture: ComponentFixture<TaoKhachHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoKhachHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
