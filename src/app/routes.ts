import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultComponent } from './components/result/result.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes : Routes = [
	{ path: 'register', component: RegisterComponent },
	{ path: 'quiz', component: QuizComponent, canActivate: [AuthGuard] },
	{ path: 'result', component: ResultComponent, canActivate: [AuthGuard] },
	{ path: '', redirectTo: '/register', pathMatch: 'full' }
];



