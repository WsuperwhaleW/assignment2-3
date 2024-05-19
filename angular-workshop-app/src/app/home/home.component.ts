import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const user: User | undefined = this.dataService.getUsers()[0];
    this.userName = user ? user.name : 'Please go to assignment 2';
  }
}

