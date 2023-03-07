import { Component, Input } from '@angular/core';
import { Task } from '../Task Model/task.model';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() tasks: Task[] = [];
  
  deleteTask(index: any) {
    this.tasks.splice(index, 1);
  }

  isChecked(task: Task){
    task.status = !task.status;
  }
}