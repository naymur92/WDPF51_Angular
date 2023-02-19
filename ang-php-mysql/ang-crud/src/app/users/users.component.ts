import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  selectedUser: User = { id: null, name: null, email: null, password: null };
  constructor(private userService: UsersService) {
    this.userService.readUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  userCreate(form: any) {
    console.log(form.value);
    this.userService.createUser(form.value).subscribe((user: User) => {
      console.log('User created, ', user);
      this.userService.readUsers().subscribe((users: User[]) => {
        this.users = users;
      });
    });
    this.selectedUser.name = null;
    this.selectedUser.email = null;
    this.selectedUser.password = null;
  }

  userUpdate(form: any) {
    form.value.id = this.selectedUser.id;
    this.userService.updateUser(form.value).subscribe((user: User) => {
      console.log('User Updated, ', user);
      this.userService.readUsers().subscribe((users: User[]) => {
        this.users = users;
      });
    });
    this.selectedUser.id = null;
    this.selectedUser.name = null;
    this.selectedUser.email = null;
  }

  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe((user: User) => {
      console.log('User Deleted, ', user);
      this.userService.readUsers().subscribe((users: User[]) => {
        this.users = users;
      });
    });
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  ngOnInit(): void {}
}
