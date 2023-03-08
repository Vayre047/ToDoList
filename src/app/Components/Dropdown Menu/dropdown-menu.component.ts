import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../Task Model/task.model';

@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit{
  filterTasks: Task[] = [];
  @Input() tasks: Task[] = [];
  @Output() newTasks = new EventEmitter<Task[]>();
  newStatus!: FormGroup;

  constructor(private fb:FormBuilder){

  }

  ngOnInit() {
    this.newStatus = this.fb.group({
      status: [null]
    });
  }

  filterStatus = [
    {
      id: 0,
      status: 'All',
    },
    {
      id: 1,
      status: 'To Do',
    },
    {
      id: 2,
      status: 'Done',
    }
  ];

  getFilterStatus(){
     if(this.newStatus.value.status === this.filterStatus[1].status){
      this.filterTasks = this.tasks.filter(task => task.status.toString().includes('false'));
     } else if (this.newStatus.value.status === this.filterStatus[2].status){
        this.filterTasks = this.tasks.filter(task => task.status.toString().includes('true'));
    }else{
       this.filterTasks = this.tasks;
      }
      this.newTasks.emit(this.filterTasks);
  }
}
