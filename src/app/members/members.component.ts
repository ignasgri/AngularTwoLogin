import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router }from '@angular/router';
import { moveIn,fallIn,moveInLeft }from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
name: any;
state: string = '';

constructor(public af: AngularFire,private router: Router) { 
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });
  }

  logout(){
    this.af.auth.logout();
    console.log('loged out');
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }

}
