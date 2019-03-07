import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthService} from './core/services/auth.service';
import {RouterModule} from '@angular/router';
import {TokenInterceptor} from './core/http/http.token.interceptor';
import {ErrorInterceptor} from './core/http/http.error.interceptor';
import {ApplicationHttpClient, applicationHttpClientCreator} from './core/http/http.factory';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([]),
        HttpClientModule,
    ],
    providers: [
        {
            provide: ApplicationHttpClient,
            useFactory: applicationHttpClientCreator,
            deps: [HttpClient]
        },
        {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true,
        },
        AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
