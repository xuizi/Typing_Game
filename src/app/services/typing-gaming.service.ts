import { Injectable,Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface Jogador {
  nome: string;
  time: string;
  tempo: string;
}

@Injectable({
  providedIn: 'root'
})
export class TypingGamingService {
  constructor(private httpClient : HttpClient,
              private router: Router) { }

  
  baseUrl:string = "http://localhost/typingGaming/typingGame/php/";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  public userregistration(username:string,email:string,password:string,confirmPassword:string) {
    return this.httpClient.post<any>(this.baseUrl + 'register.php', { username,email, password,confirmPassword })
    .pipe(map(Users => {
    return Users;
    }));
  }

  public updatePassword(username:string,password:string,confirmPassword:string) {
    return this.httpClient.post<any>(this.baseUrl + 'recoverPassword.php', {username,password,confirmPassword})
    .pipe(map(Users => {
      return Users;
    }));
  }

  public userlogin(username:string, password:string) {  
    return this.httpClient.post<any>(this.baseUrl + 'login.php', { username, password })
      .pipe(map(Users => {
        console.log("Response from server:", Users);
        this.setToken(Users[0].username);
        this.getLoggedInName.emit(true);
        return Users;
      }));
  }

  getLoggedInUsername() {
    return localStorage.getItem('username');
  }
  
  

    //token
  setToken(username: string) {
    localStorage.setItem('username', username);
  }
  getToken() {
    return localStorage.getItem('username');
  }
  deleteToken() {
    localStorage.removeItem('username');
    return this.router.navigate(['']);

  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true;
    }
    return false;
  }

  public rankingNames():Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl + 'ranking.php')
  }

  public sendDataToRanking(data:any):Observable<any>{
    return this.httpClient.post<any>(this.baseUrl + 'sendRanking.php',data);
  } 

}
