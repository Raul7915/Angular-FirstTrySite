// src/app/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' },
    { username: 'raul', password:  'pass' },
  ];

  login(username: string, password: string): boolean {
    return this.users.some(user => user.username === username && user.password === password);
  }
}
