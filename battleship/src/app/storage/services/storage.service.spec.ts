import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set local', () => {
    service.setLocal('testKey', '1');

    let local = service.getLocal('testKey');
    expect(local).toBe('1');
  });

  it('should set session', () => {
    service.setSession('testKey', '1');

    let local = service.getSession('testKey');
    expect(local).toBe('1');
  });

  it('should clear local', () => {
    service.setLocal('testKey', '1');

    service.clearLocal();

    let local = service.getLocal('testKey');
    expect(local).toBe('');
  });

  it('should clear session', () => {
    service.setSession('testKey', '1');

    service.clearSession();

    let local = service.getSession('testKey');
    expect(local).toBe('');
  });
});
