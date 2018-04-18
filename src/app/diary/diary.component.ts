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

  constructor() { }

  ngOnInit() {
  }

}
