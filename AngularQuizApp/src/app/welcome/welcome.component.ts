import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  //We are using viewChild to store the name entered by the user
  @ViewChild('name') namekey!:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  //This is a function that would run whenever the start button is clicked
  //purpose :we will store the name entered and display it on the next pages.
  startQuiz(){
    localStorage.setItem("name",this.namekey.nativeElement.value);
  }

}
