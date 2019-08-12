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
import { FirebaseAuthService } from './firebase-auth.service';
import { RouterModule } from '@angular/router';
import { FirebaseDBService } from './firebase-db.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MasterComponent
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
  providers: [FirebaseAuthService, FirebaseDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
