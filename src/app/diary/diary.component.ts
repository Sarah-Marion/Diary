import { Component, OnInit } from '@angular/core';
import {Diary} from '../diary'

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  
  diaries =  [
    new Diary(1, new Date(2018,3,10), ["Meeting at 10"]),
    new Diary(2, new Date(2018, 3, 11), ["Lunch with John"]),
    new Diary(3, new Date(2018, 3, 12), ["Swimming at the Tarven"]),
    new Diary(4, new Date(2018, 3, 13), ["Gym at 6pm"]),
    new Diary(5, new Date(2018, 3, 14), ["Conference at the Hilton at 10am"]),
  ]

  toggleDetails(index){
    this.diaries[index].showEntry=!this.diaries[index].showEntry;
  }
  deleteEntry(isComplete, index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete this Entry?`)
      if (toDelete){
        this.diaries.splice(index,1)
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
