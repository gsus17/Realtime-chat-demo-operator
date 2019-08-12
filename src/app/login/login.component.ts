import { Component, OnInit, NgZone } from '@angular/core';
import { FirebaseAuthService } from '../firebase-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public credentials = {
    user: '',
    password: '',
  }

  constructor(
    private firebaseAuthService: FirebaseAuthService,
    private zone: NgZone,
    private router: Router) { }

  ngOnInit() {
  }


  public googleLogin() {
    console.log(`${LoginComponent.name}::googleLogin`)
    this.firebaseAuthService.googleLogin()
      .then((res) => {
        console.log(`${LoginComponent.name}::success`, res)

        setTimeout(() => {
          this.goToMaster();
        }, 2000);

      })
      .catch((err) => {
        console.log(`${LoginComponent.name}::catch`, err)

      })
  }

  public twitterLogin() {
    console.log(`${LoginComponent.name}::twitterLogin`)
  }

  private goToMaster() {
    console.log(`${LoginComponent.name}::goToMaster`)
    this.zone.run(() => this.router.navigate(['/master']));
  }
}
