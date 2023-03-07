import { Component, OnInit } from '@angular/core';
import { Task } from '../Task Model/task.model';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  newTask = '';
  tasks: Task[] = [];
  anyTasks: string = "No tasks";
  taskCreated: boolean = false;

  addTask(){
    if(this.newTask){
      const newTask = new Task(this.newTask, false, this.tasks.length + 1);
      this.tasks.push(newTask);
      this.newTask = '';
    }
    this.taskCreated = true;
  }
}
