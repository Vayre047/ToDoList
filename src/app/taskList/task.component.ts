import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Task } from '../taskModel/task.model';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  @Input() tasks: Task[] = [];
  @Output() newTasks = new EventEmitter<Task[]>();

  ngOnInit(){
    this.sendMessage();
  }

  deleteTask(index: any) {
    this.tasks.splice(index, 1);
    this.newTasks.emit(this.tasks);
  }

  isChecked(task: Task){
    task.status = !task.status;
    //this.newTasks.emit(this.tasks);
  }

  sendMessage(){
    this.newTasks.emit(this.tasks);
  }
}