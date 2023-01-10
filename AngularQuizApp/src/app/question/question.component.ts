import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import {interval} from 'rxjs';



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
  correctAnswer:number=0;
  incorrectAnswer:number=0;
  interval$:any;


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
    //insted of applying checks here we can just disable the buttons in the html file
    //on a particular condition
    if(this.currentQuestion==(this.questionList.length-1)){
      this.currentQuestion=this.questionList.length-1;
    }else
    this.currentQuestion++;

  }
  prevQuestion(){
    if(this.currentQuestion==0){
      this.currentQuestion=0;
    }else
    this.currentQuestion--;
  }

  answer(currentQno:number,option:any){
    if(option.correct){
      this.points+=10;
      this.correctAnswer++;
      this.currentQuestion++;
    }else{
      this.points-=10;
      this.incorrectAnswer++;
      this.currentQuestion++;
    }
  }
  startCounter(){
    this.interval$=interval(1000)
    .subscribe((val: any)=>{
      this.counter--;
      if(this.counter===0){
        this.currentQuestion++;
        this.counter=60;
        this.points-=10;
      }
    });
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },600000);
   
  }
  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;

  }
  resetCounter(){
    this.stopCounter();
    this.counter=60;
    this.startCounter();

  }
  resetQuiz(){
    this.resetCounter();
    this.getAllQuestions();
    this.points=0;
    this.counter=60;
  }

}
