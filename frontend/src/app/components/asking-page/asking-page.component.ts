import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asking-page',
  templateUrl: './asking-page.component.html',
  styleUrls: ['./asking-page.component.scss']
})
export class AskingPageComponent implements OnInit {

  chosenNumber: number =0;
  isSubmitted=false;
  isDone=false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickNumber(number:number){
    this.isDone=true;
    this.chosenNumber=number;
  }

  onSubmit(){
    if(this.chosenNumber!==0){
      this.isSubmitted=true;
    }
  }
}
