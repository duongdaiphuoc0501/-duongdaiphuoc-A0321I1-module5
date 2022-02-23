import { TestBed } from '@angular/core/testing';

import { LoaiKhachService } from './loai-khach.service';

describe('LoaiKhachService', () => {
  let service: LoaiKhachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaiKhachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
