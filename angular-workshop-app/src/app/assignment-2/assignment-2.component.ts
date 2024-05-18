import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment-2',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './assignment-2.component.html',
  styleUrl: './assignment-2.component.css'
})
export class Assignment2Component {
  
  myForm: FormGroup = new FormGroup({
    name :new FormControl(null,Validators.required),
    age :new FormControl(null,Validators.required),
    email :new FormControl(null,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')),
    password :new FormControl(null,[Validators.minLength(8),Validators.maxLength(100)]),
  });

  constructor() {

  }

  onSubmit() {
    if (this.myForm.valid) {
      this.myForm.valueChanges.pipe().subscribe(value=>{
        console.log('Form Data: ', this.myForm.value);
      })
    } else {
      console.log('Form is invalid');
    }
  }
}
