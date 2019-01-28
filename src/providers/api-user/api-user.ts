import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {LoginResponse} from "../../models/login-response";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
 /*
  Generated class for the ApiUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiUserProvider {
  public user: LoginResponse;

  response = '';

  constructor(public http: HttpClient) {
    console.log('Hello ApiUserProvider Provider');
  }
  login(username: string, password: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const data1 = new FormData() ;
    data1.append('username', 'krs@gmail.com');
    data1.append('password', 'karan123');

    this.http.post('https://dron.limited/digimess/appapi/BasicInfo/FetchLoginUser.php', data1)
      .subscribe(data => {
        this.response = data['_body'];
        console.log(this.response);
      }, error => {
        console.log(error);
      });

  }



}
