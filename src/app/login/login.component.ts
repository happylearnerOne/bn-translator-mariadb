import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from './login.service';
import { SharedService } from '../share.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	myform : FormGroup;

  constructor(fb: FormBuilder, 
  					  private loginService : LoginService, 
  					  private sharedService : SharedService,
  					  private router : Router ) { 
  	this.myform = fb.group({
  		'emailControl' : ['fylin92@gmail.com', Validators.required],
  		'passwordControl' : ['075581488', Validators.required],
  	});
  }

  ngOnInit() {
  }

  onSubmit(form: any) : void {
  	this.loginService.login(form.emailControl, form.passwordControl)
  		.then((result) => {
  			console.log("result=", result);
  			this.sharedService.loginAccount = form.emailControl;
  			this.sharedService.loginSuccess = true;
  			console.log("on submit, and route to about");
  			this.router.navigate(['/home']);
  		})
  		.catch((error) => {
  			console.log("error=", error);
  			this.sharedService.loginSuccess = false;
  			this.sharedService.loginAccount = "";
  			alert("login failed");
  		});
  }


}
