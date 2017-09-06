import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule }from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { routes } from './app.routes';
import { AuthGuard } from './auth.service';

export const firebaseConfig = {
    apiKey: "AIzaSyBFc_X-FshQrpJirlDOUTXvuiNu8PzXgIg",
    authDomain: "angulartwologin.firebaseapp.com",
    databaseURL: "https://angulartwologin.firebaseio.com",
    storageBucket: "angulartwologin.appspot.com",
    messagingSenderId: "460855562735"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
