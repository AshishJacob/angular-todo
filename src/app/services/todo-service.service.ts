import { Injectable } from '@angular/core';
import { TodoList } from '../model/todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private allList:TodoList[];
  
  constructor() { 
     this.allList=[];
  }

  getAllLists(): TodoList[] {
    return this.allList;
  }

  createList(todoList: TodoList): boolean {
    let foundList = this.allList.find(each => each.title === todoList.title);
    if (foundList) {
      return false;
    }
    this.allList.push(todoList);
    return true;
  }
}
