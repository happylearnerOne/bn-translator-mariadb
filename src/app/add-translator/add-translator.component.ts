import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AddTranslatorService } from './add-translator.service';


@Component({
  selector: 'app-add-translator',
  templateUrl: './add-translator.component.html',
  styleUrls: ['./add-translator.component.css']
})
export class AddTranslatorComponent implements OnInit {

	addform : FormGroup;
	
  constructor(fb: FormBuilder,
  						private addTranslatorService : AddTranslatorService) { 
  	this.addform = fb.group({
  		'name' : [],
  		'skype' : [],
  		'cntry_code' : [],
  		'phone_no' : [],
  		'ctc_cntry_code' : [],
  		'ctc_phone_no' : [],
  		'email' : [],
  		'address' : [],
  		'native_lang' : [],
  		'trgt_lang_from' : [],
  		'direction' : [],
  		'trgt_lang_to' : [],
  		'education' : [],
  		'year_exp' : [],
  		'prof_field' : [],
  		'certificate' : [],
  		'ref_works' : [],
  		'tt_result' : [],
  		'comments' : [],
      /*
  		'trans_fee' : [],
  		'proofreading_fee' : [],
  		'words_per_day' : [],
  		'pay_type' : [],
  		'other_info' : [],
  		'advice' : [],
  		'desc' : []
      */
  	});
  }

  ngOnInit() {
  }

  onSubmit(form: any){
    
  	console.log("controller form=", form);
  	this.addTranslatorService.saveTranslator(form)
  		.then((result) => {
  			console.log("onSubmit, result=", result);
  		})
  		.catch((error) => {
  			console.log("onSubmit, error=", error);
  		});
      

  } 

}
