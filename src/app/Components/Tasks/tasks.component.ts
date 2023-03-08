import { Component, ViewChild } from '@angular/core';
import { DropdownMenuComponent } from '../Dropdown Menu/dropdown-menu.component';
import { Task } from '../Task Model/task.model';

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
    console.log('tasks component ' + JSON.stringify(this.tasks));
    this.filteredTasks = $event;
  }
}
