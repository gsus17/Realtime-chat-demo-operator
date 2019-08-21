import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { User } from 'firebase';
import { FirebaseDBService } from '../firebase-db/firebase-db.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-contacts',
  templateUrl: './chat-contacts.component.html',
  styleUrls: ['./chat-contacts.component.scss']
})
export class ChatContactsComponent implements OnInit, OnDestroy {

  public userList: User[] = [];

  @Output()
  public selectionUser = new EventEmitter();

  private subscriptionReference: Subscription = null;

  constructor(private db: FirebaseDBService) { }

  /**
   * Init the component.
   */
  public ngOnInit() {

    this.subscriptionReference = this.db.getConversations$()
      .subscribe((data) => this.userList = data);
  }

  /**
   * Unsubscription.
   */
  public ngOnDestroy() {
    this.subscriptionReference.unsubscribe();
  }

  /**
   * Chat selection.
   */
  public selectChat(item: User): void {
    this.selectionUser.emit(item);
  }

}
