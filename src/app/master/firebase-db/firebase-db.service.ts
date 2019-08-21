import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from '../../interfaces/message';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDBService {

  constructor(private db: AngularFirestore) { }

  /**
   * Return the message list.
   */
  public getConversationByUid$(uidChat: string) {
    return this.db
      .collection('messages')
      .doc(uidChat)
      .collection('chats', ref => ref.orderBy('date')).valueChanges();
  }

  /**
   * Insert a new message.
   */
  public setMessage(newMessage: Message): Promise<firebase.firestore.DocumentReference> {
    console.log(`${FirebaseDBService.name}::setMessage`);

    if (newMessage.uidChat === undefined || newMessage.uidChat === null) {
      newMessage.uidChat = this.createId();
    }

    return this.db
      .collection('messages')
      .doc(newMessage.uidChat)
      .collection('chats')
      .add(newMessage);
  }

  /**
   * getConversationById
   */
  public getConversations$(): Observable<any[]> {
    return this.db.collection('users').valueChanges();
  }

  /**
   * sendMessage
   */
  public sendMessage(message: Message): void {
    console.log(`${FirebaseDBService.name}::sendMessage`);
    const newId = this.createId();

    message.uidChat = newId;
    this.db
      .collection('chats')
      .doc(newId)
      .set(message);
  }

  /**
   * Update message unread.
   */
  public updateMessageUnread(user: User) {
    console.log(`${FirebaseDBService.name}::updateMessageUnread`);
    user.messageUnread = 0;
    this.db
      .doc(`users/${user.uid}`)
      .update(user);
  }

  /**
   * createId
   */
  public createId(): string {
    return this.db.createId();
  }
}
