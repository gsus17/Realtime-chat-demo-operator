import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';
import { routes } from './app.routing';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FirebaseAuthService } from './login/firebase-auth/firebase-auth.service';
import { RouterModule } from '@angular/router';
import { FirebaseDBService } from './master/firebase-db/firebase-db.service';
import { AuthGuardService } from './auth-guard.service';
import { ChatWindowComponent } from './master/chat-window/chat-window.component';
import { ChatContactsComponent } from './master/chat-contacts/chat-contacts.component';
import { NoimagePipe } from './pipes/noimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MasterComponent,
    ChatWindowComponent,
    ChatContactsComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [FirebaseAuthService, FirebaseDBService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
