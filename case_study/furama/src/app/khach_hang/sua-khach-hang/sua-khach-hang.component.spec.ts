import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaKhachHangComponent } from './sua-khach-hang.component';

describe('SuaKhachHangComponent', () => {
  let component: SuaKhachHangComponent;
  let fixture: ComponentFixture<SuaKhachHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaKhachHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
