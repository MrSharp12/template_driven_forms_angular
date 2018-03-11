import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
//triggered whenever this form is submitted by the user
//here we want to output whatever the user submitted
//set the form and its type as the argument
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
