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

  public messages: any[] = [];

  public newMessage = '';

  public user: User = null;

  private element: HTMLElement;

  constructor(
    private firebaseDb: FirebaseDBService,
    private firebaseAuthService: FirebaseAuthService,
    private router: Router) { }

  /**
   * Inicializacion del componente.
   */
  public ngOnInit() {
    this.user = this.firebaseAuthService.geUser();
    this.element = document.getElementById('chat-container');
    this.loadMessages();
  }

  /**
   * Load messages.
   */
  public loadMessages() {
    console.log(`${MasterComponent.name}::loadMessages`);

    this.firebaseDb.getMessages()
      .subscribe((response) => {
        this.messages = response;
        this.updateScroll();
      });
  }

  /**
   * Evaluate if the message is sent by the current user.
   */
  public messageSendByMe(message: Message) {
    return this.user.uid === message.uid;
  }

  /**
   * Send message.
   */
  public sendMessage() {
    console.log(`${MasterComponent.name}::sendMessage`);
    if (this.newMessage) {
      const newMessage: Message = {
        uid: this.user.uid,
        name: this.user.name,
        date: new Date(),
        message: this.newMessage
      };

      this.firebaseDb.setMessage(newMessage)
        .then(() => {
          this.newMessage = '';
        });
    }
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
   * Update the scroll position.
   */
  private updateScroll() {
    setTimeout(
      () => {
        this.element.scrollTop = this.element.scrollHeight;
      },
      20);
  }

  /**
   * Redirect to login view.
   */
  private goToLogin() {
    this.router.navigate(['/login']);
  }
}
