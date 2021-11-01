import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  newDate = new Date();
  fg:FormGroup;
  constructor(private fb:FormBuilder){
    this.fg = this.fb.group({
      name:'Vic',
      startDate: new Date()
    });
    this.fg.controls.startDate.setValidators(Validators.required);
    //this.fg.controls.startDate.touched;
  } 
  changeValue(){
    this.fg.controls.startDate.setValue(new Date());
  }
}
