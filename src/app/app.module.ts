import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultComponent } from './components/result/result.component';
import { appRoutes } from './routes';
import { AuthGuard } from './auth/auth.guard';
import { QuizService } from './shared/quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard, QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
