import { Component, OnInit } from '@angular/core';
import {Diary} from '../diary'

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  
  diaries =  [
    new Diary(1, new Date(2018, 3, 14) ),
    new Diary(2, new Date(2018, 3, 14) ),
    new Diary(3, new Date(2018, 3, 14) ),
    new Diary(4, new Date(2018, 3, 14) ),
    new Diary(5, new Date(2018, 3, 14) ),
    new Diary(6, new Date(2018, 3, 14) ),
    new Diary(7, new Date(2018, 3, 14) ), 
  ]
  deleteEntry(isComplete, index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete this Entry?`)
      if (toDelete){
        this.diaries.splice(index, 1);
      }
    }
  }

  addNewEntry(diary){
    let entryLength= this.diaries.length;
    diary.id=entryLength+1;
    diary.entryDate=new Date(diary.entryDate);
    this.diaries.push(diary);
  }
  constructor() { }

  ngOnInit() {
  }

}
