import { TodoItem } from "./todo-item";

export class TodoList {
    public title:string;
    public list:TodoItem[];

    constructor(title:string,list:TodoItem[]){
        this.list=list;
        this.title=title;
    }
}
