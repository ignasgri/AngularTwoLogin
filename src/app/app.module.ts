import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule }from 'angularfire2';
import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyBFc_X-FshQrpJirlDOUTXvuiNu8PzXgIg",
    authDomain: "angulartwologin.firebaseapp.com",
    databaseURL: "https://angulartwologin.firebaseio.com",
    storageBucket: "angulartwologin.appspot.com",
    messagingSenderId: "460855562735"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
