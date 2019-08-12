import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDBService {

  constructor(public db: AngularFirestore) { }

  public getMessages() {
    return this.db.collection('messages').valueChanges();
  }
}
