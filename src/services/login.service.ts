import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { take } from 'rxjs/internal/operators';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
    export class LoginService {
    public userObservable: Observable<firebase.User>;

    // _firebaseAuthService: any;
    constructor(private _activatedRoute: ActivatedRoute, private _firebaseAuthService: AngularFireAuth) {
        this.userObservable = this._firebaseAuthService.authState;
    }

    public login() {
        this._firebaseAuthService.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    public logout() {
        this._firebaseAuthService.auth.signOut();
    }
}
