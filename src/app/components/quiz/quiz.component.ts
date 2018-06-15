import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from './../../shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
	interval: any;
	timer: number = 0;
	seconds: number = 0;
	questionProgress: number = 0;
	quizQuestion: any;
	instructionShow: boolean = true;
	QuizContainershow: boolean = false;
	reviewAndconfirmation: boolean = false;
	
	constructor(private router: Router, private quizService: QuizService) { }

	ngOnInit() {
		//this.startTimer();
	}
	
	startQuiz() {
		this.instructionShow = false;
		this.QuizContainershow = true;
		this.interval = this.startTimer();
		this.quizQuestion = this.quizService.getQuestion();
	}
	
	stopQuiz() {
		localStorage.removeItem('user');
		this.router.navigate(['/register']);
	}
	
	startTimer() {
		this.timer = setInterval( () => {
			this.seconds++;
		}, 1000);
	}
	
	displayTime() {
		return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
	}
	
	answer(id:number, choice:number) {
		choice++;
		this.quizQuestion[this.questionProgress].answer = choice;
		this.questionProgress++;
		
		if(this.questionProgress == 5) {
			sessionStorage.setItem('questionAnswer', JSON.stringify(this.quizQuestion));
			clearInterval(this.interval);
			//this.router.navigate(['/result']);
			this.instructionShow = false;
			this.QuizContainershow = false;
			this.reviewAndconfirmation = true;
		}
	}
	
	editQuiz() {
		this.instructionShow = false;
		this.QuizContainershow = true;
		this.reviewAndconfirmation = false;
		this.questionProgress = 0;
	}
	
	submitQuiz() {
		clearInterval(this.interval);
		this.router.navigate(['/result']);
	}
}
