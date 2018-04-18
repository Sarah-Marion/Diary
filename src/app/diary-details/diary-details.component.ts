import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary-details',
  templateUrl: './diary-details.component.html',
  styleUrls: ['./diary-details.component.css']
})
export class DiaryDetailsComponent implements OnInit {
  @Input() diary:Diary;
  @Output() isComplete = new EventEmitter<boolean>();

  // remove this if fails
  // newToDo = [""];
  // @Output() addToDo= new EventEmitter<Diary>();
  // addNew(toDo){
  //   // let entryLength= this.toDo.length;
  //   // toDo.id=entryLength+1;
  //   toDo.entry= "";
  //   this.newToDo.push(toDo);
  // }
  // submitEntry(){
  //   this.addToDo.emit(this.newToDo);
  // }

  deleteEntry(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
