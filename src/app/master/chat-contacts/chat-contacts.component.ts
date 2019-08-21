import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FirebaseDBService } from '../firebase-db/firebase-db.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-chat-contacts',
  templateUrl: './chat-contacts.component.html',
  styleUrls: ['./chat-contacts.component.scss']
})
export class ChatContactsComponent implements OnInit, OnDestroy {

  public userList: User[] = [];
  public searchFilter = '';
  public userListToRender: User[] = [];

  @Output()
  public selectionUser = new EventEmitter();

  private subscriptionReference: Subscription = null;

  constructor(private db: FirebaseDBService) { }

  /**
   * Init the component.
   */
  public ngOnInit() {

    this.subscriptionReference = this.db.getConversations$()
      .subscribe((data: User[]) => {
        this.userList = data;
        this.userListToRender = data;
      });
  }

  /**
   * Filter list.
   */
  public filterList() {
    if (this.searchFilter !== undefined && this.searchFilter !== '') {
      this.userListToRender = this.userList.filter((user: User) => user.name.toLowerCase().indexOf(this.searchFilter.toLowerCase()) > -1);
    } else {
      this.userListToRender = this.userList;
    }
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
