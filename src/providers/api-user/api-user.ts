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


  constructor(public http: HttpClient) {
    console.log('Hello ApiUserProvider Provider');
  }
  login(username: string, password: string): Observable<LoginResponse>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const data = new FormData() ;
    data.append("username", username);
    data.append("password", password);
    console.log(this.user.college);

    return   this.http.post<LoginResponse>('https://dron.limited/digimess/appapi/BasicInfo/FetchLoginUser.php',
      data, {headers: headers}).pipe(tap(data => this.user.college= data.college) );


  }



}
