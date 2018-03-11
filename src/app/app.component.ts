import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//alternative approach
//using at ViewChild is good if you want to access the form
//not just at the point of submission, but earlier
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  //setting up a default property to appear in the input field
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  defaultGender = 'male';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }
//triggered whenever this form is submitted by the user
//here we want to output whatever the user submitted
//set the form and its type as the argument
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
