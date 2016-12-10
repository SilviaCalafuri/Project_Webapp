import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Auth {
  actionUrl: string = "http://localhost:8043/";

  constructor(private _http: Http) {
      console.log("Hello Auth Provider")
  }

  createAuthorizationHeader(headers: Headers){
    headers.append('token', window.localStorage.getItem('token'));
  }

  /*** LOGIN METHODE ***/
  login(data){
    console.log("***", this.extractData)
      return this._http.post(this.actionUrl+'login', data)
      .map(this.extractData);
  }

  isLogged(){
    if(window.localStorage.getItem('token')){
      return true
    }else{
      return false;
    }
  }

  logout(){
    window.localStorage.removeItem('token');
    return true;
  }

  projects(){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this._http.get(this.actionUrl+'projects', {
      headers: headers
    }).map(res => res.json());
  }


  private extractData(res: Response){
    let body = res.json();
    if(body.success === true){
      window.localStorage.setItem('token', body.token);
    };
    return body || {};
  }



}
