import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { TodoService } from '../services/todo-service.service';
import { TodoList } from '../model/todo-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public allList:TodoList[];
  
  public item:string;

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.allList = this.todoService.getAllLists();
  }

  removeItem(index){
    //this.toDoList.splice(index,1);
  }
  
}
