import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { take } from 'rxjs/internal/operators';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/internal/observable';

@Component({
  selector: 'gw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // public userObservable: Observable<firebase.User>;
  // public isShowingLoginWarning;

  constructor() { }

  // public ngOnInit() {
  //   this.userObservable = this._firebaseAuthService.authState;
  // }
  // public login() {
  //   this._firebaseAuthService.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }

}
