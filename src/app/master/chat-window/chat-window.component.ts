import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Message } from 'src/app/interfaces/message';
import { FirebaseDBService } from '../firebase-db/firebase-db.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit, OnChanges {

  @Input()
  public userAuthenticate: User = null;

  @Input()
  public userSelected: User = null;

  @Output()
  public logoutHandler = new EventEmitter();
  public messages: any[] = [];
  public newMessage = '';
  private element: HTMLElement;
  private subscriptionReference: Subscription = null;


  constructor(private firebaseDb: FirebaseDBService) { }

  /**
   * Init the component.
   */
  public ngOnInit() {
    this.element = document.getElementById('chat-container');
    this.loadMessages();
  }

  /**
   * Detect any changes.
   */
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.userSelected.currentValue !== null) {
      this.loadMessages();
    }
  }

  /**
   * Evaluate if the message is sent by the current user.
   */
  public messageSendByMe(message: Message) {
    return this.userAuthenticate.uid === message.from;
  }

  /**
  * Load messages.
  */
  public loadMessages() {
    console.log(`${ChatWindowComponent.name}::loadMessages`);
    if (this.userSelected !== null) {
      if (this.subscriptionReference !== null) {
        this.subscriptionReference.unsubscribe();
      }
      this.subscriptionReference = this.firebaseDb
        .getConversationByUid$(this.userSelected.uid)
        .subscribe((response) => {
          this.messages = response;
          this.updateScroll();
        });
    }
  }

  /**
   * Close session.
   */
  public logout(): void {
    this.logoutHandler.emit();
  }

  /**
   * Send message.
   */
  public sendMessage() {
    console.log(`${ChatWindowComponent.name}::sendMessage`);
    if (this.newMessage) {
      const newMessageToSend: Message = {
        from: this.userAuthenticate.uid,
        name: this.userAuthenticate.name,
        date: new Date(),
        message: this.newMessage,
        to: this.userSelected.uid,
        uidChat: this.userSelected.uid
      };

      this.firebaseDb
        .setMessage(newMessageToSend)
        .then(() => {
          this.newMessage = '';
        });
    }
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
}
