import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {SERVER_URL} from './config';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let favorites = [],
propertiesURL = "localhost:8043/projects";

@Injectable()
export class ProjectsService {

    constructor (public http:Http) {
        this.http = http;
    }

    findAll() {
        return this.http.get(propertiesURL)
            .map(res => res.json())
            .catch(this.handleError);

            //.toPromise()
            //.then(res => res.json(), err => console.log(err));
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

  }
