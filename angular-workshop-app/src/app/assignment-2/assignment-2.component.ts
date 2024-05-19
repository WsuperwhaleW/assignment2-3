import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TestPipe } from '../test.pipe';
import { FormStyleDirective } from '../form-style.directive';
import { User } from '../user.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-assignment-2',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, TestPipe, NgFor, FormStyleDirective, NgIf],
  templateUrl: './assignment-2.component.html',
  styleUrls: ['./assignment-2.component.css']
})
export class Assignment2Component {

  formData: any;
  genders: string[] = ['Male', 'Female', 'Non-binary', 'Binary', 'Prefer not to say'];
  isOtherSelected: boolean = false;

  myForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    sex: new FormControl(null, Validators.required),
    otherGender: new FormControl(null),
    age: new FormControl(null, [Validators.required,Validators.min(1),Validators.max(200)]),
    email: new FormControl(null, [Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'), Validators.required]),
    password: new FormControl(null, [Validators.minLength(8), Validators.maxLength(100), Validators.required])
  });

  constructor(private dataService: DataService) {}

  onGenderChange() {
    const selectedGender = this.myForm.get('sex')?.value;
    this.isOtherSelected = selectedGender === 'Other';
    if (this.isOtherSelected) {
      this.myForm.get('otherGender')?.setValidators([Validators.required]);
    } else {
      this.myForm.get('otherGender')?.clearValidators();
      this.myForm.get('otherGender')?.setValue('');
    }
    this.myForm.get('otherGender')?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.formData = this.myForm.value;
      this.dataService.addUser(this.formData);
      console.log('Form Data: ', this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
