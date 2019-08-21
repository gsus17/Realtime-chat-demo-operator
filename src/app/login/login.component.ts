import { Component, OnInit, NgZone } from '@angular/core';
import { FirebaseAuthService } from './firebase-auth/firebase-auth.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private firebaseAuthService: FirebaseAuthService,
    private zone: NgZone,
    private router: Router) { }

  ngOnInit() {
  }

  /**
   * Login with google.
   */
  public googleLogin() {
    console.log(`${LoginComponent.name}::googleLogin`);

    this.firebaseAuthService.googleLogin()
      .then((res) => {
        console.log(`${LoginComponent.name}::success`, res);
        this.saveLocalUser(res);
        this.goToMaster();
      })
      .catch((err) => {
        console.log(`${LoginComponent.name}::catch`, err);
      });
  }

  /**
   * Login with twitter.
   */
  public twitterLogin() {
    console.log(`${LoginComponent.name}::twitterLogin`);
  }

  /**
   * Save user login.
   */
  private saveLocalUser(response: any) {
    console.log(`${LoginComponent.name}::saveLocalUser`);

    const user: User = {
      uid: response.user.uid,
      name: response.user.displayName,
      avatar: response.user.photoURL
    };

    this.firebaseAuthService.setUser(user);
  }

  /**
   * Redirect to master view.
   */
  private goToMaster() {
    console.log(`${LoginComponent.name}::goToMaster`);
    this.zone.run(() => this.router.navigate(['/master']));
  }
}
