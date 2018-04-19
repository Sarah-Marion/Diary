import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Diary, textEntry } from '../diary';

@Component({
  selector: 'app-diary-details',
  templateUrl: './diary-details.component.html',
  styleUrls: ['./diary-details.component.css']
})
export class DiaryDetailsComponent implements OnInit {
  @Input() diary:Diary;
  @Input() textEntry: textEntry;
 
  @Output() isComplete = new EventEmitter<boolean>();
  

  textEntries = [new textEntry(1, "The 2nd ToDo")]
  
  
  addTextEntries(entry){
    let lengthEntry = this.textEntries.length;
    entry.count = lengthEntry + 1;
    this.textEntries.push(entry);

  }

  deleteEntry(complete:boolean){
    this.isComplete.emit(complete);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
