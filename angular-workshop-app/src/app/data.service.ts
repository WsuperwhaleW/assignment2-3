
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private users: User[] = [];

  constructor() { }

  addUser(user: User): void {
    this.users.push(user);
  }

  getUsers(): User[] {
    return this.users;
  }

  getUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }

  updateUser(email: string, updatedUser: User): void {
    const index = this.users.findIndex(user => user.email === email);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  deleteUser(email: string): void {
    this.users = this.users.filter(user => user.email !== email);
  }
}
