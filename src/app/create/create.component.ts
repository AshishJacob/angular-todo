import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { TodoService } from '../services/todo-service.service';
import { TodoList } from '../model/todo-list';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  public listName:string;
  public toDoList:TodoItem[];
  
  public item:string;

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.toDoList = [];
  }

  createList(){
    
  }

  addItem(){
    this.toDoList.push(new TodoItem(this.item));
  }

  removeItem(index){
    this.toDoList.splice(index,1);
  }

  save(){
    if(this.listName==""){
      alert("Invalid");
      return;
    }
    
    if(this.toDoList.length==0){
      alert("Invalid List");
      return;
    }

    this.todoService.createList(new TodoList(this.listName, this.toDoList));
  }
  
}
