import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from './../../shared/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
	
	user: any;
	question: any;
	result: any;
	
	constructor(private router: Router, private quizService: QuizService) { }

	ngOnInit() {
		this.getUserDetails();
		this.questions();
		this.getResult();
	}
	
	questions() {
		this.question = JSON.parse(sessionStorage.getItem('questionAnswer'));
	}
	
	getResult() {
		this.result = this.quizService.getResultServices();
	}
	
	getUserDetails() {
		debugger;
		let name = JSON.parse(localStorage.getItem('user'));
		this.user = name.username;
	}
	
}
