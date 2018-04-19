import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { textEntry } from '../diary';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  newTextEntries = new textEntry(0,"");
  @Output() addTextEntry = new EventEmitter<textEntry>();

   submitText(){
  this.addTextEntry.emit(this.newTextEntries);
  }

  constructor() { }

  ngOnInit() {
  }

}
