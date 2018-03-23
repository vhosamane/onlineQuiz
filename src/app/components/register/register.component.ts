import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	
	loginForm: FormGroup;
	
	constructor(private builder: FormBuilder, private router: Router) { }

	ngOnInit() {
		this.loginForm = this.builder.group({
			username: ['', Validators.compose([Validators.required, Validators.minLength(5))],
			email: ['', Validators.compose([Validators.required, Validators.email])]
		});
	}
	
	register() {
		var user = {
			username: this.loginForm.value.username,
			email: this.loginForm.value.email
		};
		localStorage.setItem('user', JSON.stringify(user));
		this.router.navigate(['/quiz']);
	}

}
