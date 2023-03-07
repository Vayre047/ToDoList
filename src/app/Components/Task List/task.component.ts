import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task Model/task.model';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() tasks: Task[] = [];
  @Output() newTasks = new EventEmitter<Task[]>();
  
  deleteTask(index: any) {
    this.tasks.splice(index, 1);
    this.newTasks.emit(this.tasks);
  }

  isChecked(task: Task){
    task.status = !task.status;
    this.newTasks.emit(this.tasks);
  }
}