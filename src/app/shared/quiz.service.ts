import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {
	resultArray: any;
	correctAnswer: number = 0;
	constructor() { }
	
	question = [
		{
			"Question": "Who won the 2008 IPL ?",
			"Qid" : 1,
			"options": [
				"Rajasthan Royals",
				"Chennai Super Kings",
				"Royal Challengers Bangalore",
				"Mumbai Indians"
			],
			"ans": 1
		},
		{
			"Question": "Who won the 2009 IPL ?",
			"Qid" : 2,
			"options": [
				"Sunrisers Hyderabad",
				"Kolkata Knight Riders",
				"Rising Pune Supergiant",
				"Deccan Chargers"
			],
			"ans": 4
		},
		{
			"Question": "Who won the 2010 IPL ?",
			"Qid" : 3,
			"options": [
				"Chennai Super Kings",
				"Deccan Chargers",
				"Kolkata Knight Riders",
				"Sunrisers Hyderabad"
			],
			"ans": 1
		},
		{
			"Question": "Who won the 2011 IPL ?",
			"Qid" : 4,
			"options": [
				"Royal Challengers Bangalore",
				"Rajasthan Royals",
				"Chennai Super Kings",
				"Mumbai Indians"
			],
			"ans": 3
		},
		{
			"Question": "Who won the 2012 IPL ?",
			"Qid" : 5,
			"options": [
				"Royal Challengers Bangalore",
				"Kolkata Knight Riders",
				"Mumbai Indians",
				"Chennai Super Kings"
			],
			"ans": 2
		}
	];
	
	getQuestion() {
		return this.question;
	}
	
	getResultServices() {
		this.resultArray = JSON.parse(sessionStorage.getItem('questionAnswer'));
		for(var i=0; i< 5; i++) {
			if(this.question[i].ans === this.resultArray[i].answer) {
				this.correctAnswer ++;
			}
		}
		return this.correctAnswer;
	}
	
}
