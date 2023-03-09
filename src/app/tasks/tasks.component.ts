import { Component } from '@angular/core';
import { Task } from '../taskModel/task.model';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent{
  newTask = '';
  tasks: Task[] = [];
  anyTasks: string = "No tasks";
  taskCreated: boolean = false;
  filteredTasks: Task[] = [];

  addTask(): void{
    if(this.newTask){
      const newTask = new Task(this.newTask, false, this.tasks.length + 1);
      this.tasks.push(newTask);
      this.filteredTasks.push(newTask);
      this.newTask = '';
    }
    this.taskCreated = true;
  }
  
  updateTask($event: Task[]){
    this.filteredTasks = $event;
  }
}
