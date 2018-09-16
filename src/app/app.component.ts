import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo-app';
  createMode:boolean = true;

  create(){
    this.createMode = true;
  }
  
  view(){
    this.createMode = false;
  }
}
