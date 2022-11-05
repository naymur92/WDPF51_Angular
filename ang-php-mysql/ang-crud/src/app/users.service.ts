import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  USER_API_SERVER = "http://localhost/wdpf51_Angular/ang-php-mysql/api/user";
	constructor(private httpClient: HttpClient) {}
	readUsers(): Observable<User[]>{
		return this.httpClient.get<User[]>(`${this.USER_API_SERVER}/index.php`);
	}

  createUser(user: User):Observable<User> {
    return this.httpClient.post<User>(`${this.USER_API_SERVER}/create_user.php`, user);
  }
	// createUser(user: User): Observable<User>{
	// 	return this.httpClient.post<User>(`${this.USER_API_SERVER}/create_user.php`, user);
	// }
	// updateUser(user: User){
	// 	return this.httpClient.put<User>(`${this.USER_API_SERVER}/update_user.php`, user);
	// }
	// deleteUser(id: number){
	// 	return this.httpClient.delete<User>(`${this.USER_API_SERVER}/delete_user.php/?id=${id}`);
	// }
}
