import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {ApplicationHttpClient} from '../http/http.factory';

@Injectable()
export class AuthService {

    constructor(private http: ApplicationHttpClient,
                private router: Router) {
    }

    login(username: string, password: string): Observable<any> {
        return this.http.Post('login', {password: 'cityslicka'});
    }
}
