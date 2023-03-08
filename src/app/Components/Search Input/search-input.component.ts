import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task Model/task.model';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  @Input() tasks: Task[] = [];
  @Output() newSearchedTasks = new EventEmitter<Task[]>();
  newSearchTask = "";
  searchTasks: Task[] = [];
  
  getSearchTask(){
    this.searchTasks = this.tasks.filter(task => task.name.toLocaleLowerCase().includes(this.newSearchTask));
    this.newSearchedTasks.emit(this.searchTasks);
    this.newSearchTask = "";
  }
}