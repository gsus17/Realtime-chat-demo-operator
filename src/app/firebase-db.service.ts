import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from './interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDBService {

  constructor(public db: AngularFirestore) { }

  /**
   * Return the message list.
   */
  public getMessages() {
    return this.db.collection('messages', ref => ref.orderBy('date')).valueChanges();
  }

  /**
   * Insert a new message.
   */
  public setMessage(newMessage: Message): Promise<firebase.firestore.DocumentReference> {
    return this.db.collection('messages').add(newMessage);
  }
}
