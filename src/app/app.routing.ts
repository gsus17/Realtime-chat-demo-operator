import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';
import { AuthGuardService } from './auth-guard.service';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'master', component: MasterComponent, canActivate: [AuthGuardService] },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
