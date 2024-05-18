import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TestPipe } from '../test.pipe';
import { FormStyleDirective } from '../form-style.directive';

@Component({
  selector: 'app-assignment-2',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe,TestPipe,NgFor,FormStyleDirective,NgIf],
  templateUrl: './assignment-2.component.html',
  styleUrl: './assignment-2.component.css'
})
export class Assignment2Component {

  formData: any;
  genders: string[] = ['Male', 'Female', 'Non-binary','Binary', 'Other', 'Prefer not to say'];

  myForm: FormGroup = new FormGroup({
    name :new FormControl(null,Validators.required),
    sex:new FormControl(null,Validators.required),
    age :new FormControl(null,Validators.required),
    email :new FormControl(null,[Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'),Validators.required]),
    password :new FormControl(null,[Validators.minLength(8),Validators.maxLength(100),Validators.required])
  });

  constructor() {

  }

  onSubmit() {
    if (this.myForm.valid) {
      this.formData = this.myForm.value; 
      console.log('Form Data: ', this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
