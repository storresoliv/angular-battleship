import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setLocal(key: string, value: string): void {
    let encrypted = this.encrypt(value);

    localStorage.setItem(key, encrypted);
  }

  setSession(key: string, value: string): void {
    let encrypted = this.encrypt(value);

    sessionStorage.setItem(key, encrypted);
  }

  getLocal(key: string): string {
    let encrypted = localStorage.getItem(key) || '';

    return this.decrypt(encrypted);
  }

  getSession(key: string): string {
    let encrypted = sessionStorage.getItem(key) || '';

    return this.decrypt(encrypted);
  }

  clearLocal(): void {
    localStorage.clear();
  }

  clearSession(): void {
    sessionStorage.clear();
  }

  private encrypt(raw: string): string {
    return btoa(raw);
  }

  private decrypt(encrypted: string): string {
    return atob(encrypted);
  }
}
