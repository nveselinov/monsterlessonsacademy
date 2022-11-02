import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { UsersDataSource } from './services/users.dataSource';
import { UsersService } from './services/users.service';
import { UserInterface } from './types/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  dataSource = new UsersDataSource(this.usersService);
  displayedColumns: string[] = ['id', 'name', 'age'];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.dataSource.loadUsers({ active: 'id', direction: 'asc' });
  }

  selectRow(row: UserInterface): void {
    console.log('selectRow', row);
  }

  sortUsers(sort: Sort): void {
    this.dataSource.loadUsers(sort);
  }
}
