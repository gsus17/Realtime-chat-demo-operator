import { Component, OnInit } from '@angular/core';
import { FirebaseDBService } from './firebase-db/firebase-db.service';
import { FirebaseAuthService } from '../login/firebase-auth/firebase-auth.service';
import { Router } from '@angular/router';
import { Message } from '../interfaces/message';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  public userAuthenticate: User = null;
  public openedSideBar = true;
  public openedSideBarMode = 'side';
  public userSelected = null;

  constructor(
    private firebaseAuthService: FirebaseAuthService,
    private router: Router) { }

  /**
   * Inicializacion del componente.
   */
  public ngOnInit() {
    this.userAuthenticate = this.firebaseAuthService.geUser();
  }

  /**
   * changeUserSelected
   */
  public changeUserSelected(userSelected: User) {
    this.userSelected = userSelected;
  }

  /**
   * Logout.
   */
  public logout() {
    console.log(`${MasterComponent.name}::logout`);

    this.firebaseAuthService.logout()
      .then((res) => {
        console.log(`${MasterComponent.name}::success`, res);
        this.goToLogin();
      })
      .catch((err) => {
        console.log(`${MasterComponent.name}::catch`, err);
      });
  }

  /**
   * Redirect to login view.
   */
  private goToLogin() {
    this.router.navigate(['/login']);
  }
}
