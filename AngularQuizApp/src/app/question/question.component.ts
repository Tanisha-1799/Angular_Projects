import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public name : string="";

  constructor() { }

  ngOnInit(): void {
    //! mark is added to make sure that initially the name should have a value 
    //it should not be undefined because if it is undefined it will throw error
    
    this.name=localStorage.getItem("name")!;
  }

}
