import { Component, OnInit } from '@angular/core';
import { FirebaseDBService } from '../firebase-db.service';
import { FirebaseAuthService } from '../firebase-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  public messages: any[] = [];

  constructor(
    private firebaseDb: FirebaseDBService,
    private firebaseAuthService: FirebaseAuthService,
    private router: Router) { }

  ngOnInit() {
    this.loadMessages();
  }

  public loadMessages() {
    this.firebaseDb.getMessages()
      .subscribe((response) => {
        this.messages = response;
      })
  }

  /**
   * logout
   */
  public logout() {
    console.log(`${MasterComponent.name}::logout`)

    this.firebaseAuthService.logout()
      .then((res) => {
        console.log(`${MasterComponent.name}::success`, res)
        this.goToLogin();
      })
      .catch((err) => {
        console.log(`${MasterComponent.name}::catch`, err)

      })
  }

  private goToLogin() {
    this.router.navigate(['/login'])
  }

}
