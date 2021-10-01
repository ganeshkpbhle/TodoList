import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Dataset } from '../model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() Items:Array<Dataset>=[];
  @Output() checkEvent=new EventEmitter();
  saveUsername:any;
  constructor() { }

  ngOnInit(): void {
  }
  triggerCheck(task:number){
    this.checkEvent.emit(task);
  }
}
