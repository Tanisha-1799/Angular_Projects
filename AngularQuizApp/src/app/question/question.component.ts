import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public name : string="";
  public questionList : any =[];
  public currentQuestion:number=0;
  public points:number=0;
  counter=60;


  //constructor is used for injecting the services 
  //so we first assign a variable and then import the service
  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    //! mark is added to make sure that initially the name should have a value 
    //it should not be undefined because if it is undefined it will throw error

    this.name=localStorage.getItem("name")!;
    this.getAllQuestions();
  }
  //calling the service to get the questions

  getAllQuestions(){
    this.questionService.getQuestionJson()
    .subscribe((res: any)=>{
     this.questionList=res.questions;
    })

  }

  //Making methods for the lower buttons to move left and right
  nextQuestion(){
    this.currentQuestion++;

  }
  prevQuestion(){
    this.currentQuestion--;
  }

}
