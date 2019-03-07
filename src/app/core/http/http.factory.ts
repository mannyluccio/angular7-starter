import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

export interface IRequestOptions {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: any;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    body?: any;
}

export function applicationHttpClientCreator(http: HttpClient) {
    return new ApplicationHttpClient(http);
}

@Injectable()
export class ApplicationHttpClient {

    private api = environment.endpoint;

    // Extending the HttpClient through the Angular DI.
    public constructor(public http: HttpClient) {
        // If you don't want to use the extended versions in some cases you can access the public property and use the original one.
        // for ex. this.httpClient.http.get(...)
    }

    public Get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
        return this.http.get<T>(this.api + endPoint, options);
    }

    public Post<T>(endPoint: string, params: object, options?: IRequestOptions): Observable<T> {
        return this.http.post<T>(this.api + endPoint, params, options);
    }

    public Put<T>(endPoint: string, params: object, options?: IRequestOptions): Observable<T> {
        return this.http.put<T>(this.api + endPoint, params, options);
    }

    public Delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
        return this.http.delete<T>(this.api + endPoint, options);
    }
}
