import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router }from '@angular/router';
import { moveIn,fallIn }from '../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

state: string = '';
error: any;

  constructor(public af: AngularFire,private router: Router) { 

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

   onSummit(formData) {
     if(formData.valid) {
       console.log(formData.value);
       this.af.auth.login({
         email: formData.value.email,
         password: formData.value.password
       }).then(
         (success) => {
           this.router.navigate(['/members'])
         }).catch (
           (err) => {
             this.error = err;
           })
     }
   }
  ngOnInit() {
  }

}
