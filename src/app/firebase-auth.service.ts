import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(public afAuth: AngularFireAuth) { }

  public googleLogin() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  public logout() {
    return this.afAuth.auth.signOut();
  }
}
