import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LectorBarrasComponent } from './lector-barras/lector-barras.component';
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";
import { AccessFormComponent } from './access-form/access-form.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LectorBarrasComponent,
    AccessFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarcodeScannerLivestreamModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
