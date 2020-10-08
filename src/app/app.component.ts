import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to my new Angyular projects Hub.';
  video = 'Ternary Operator Using.';
  like  = 'Sorry not working';

  firstName = ' Abdul Alim';
  lastName  = ' Stay at South Banasree';

  multiCssClasses = ' changeColor bgColor';

  //  boolean type property
  singleCssChange = true;

  inlineFont = true;

  isHidden = false;
   //  event Bindign Handling
   texts = ' ';
  // Two way reference ngModel
  email = 'alimcsebd@gmail.com';

  getEmail(): any {
    console.log(this.email);
  }


  // tslint:disable-next-line: typedef
  myfunc(){
     this.texts = ' Useing Envent Binding.';
  }


  // property concatenate
  address(): string{
    return this.firstName + this.lastName;
  }
  // getEmail($event){
  //   console.log($event.target.value);
  // }
  // getEmailId(email){
  //   console.log(email);
  // }
}
