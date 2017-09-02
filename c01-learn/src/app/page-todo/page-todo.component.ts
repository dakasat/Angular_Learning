import { Component, OnInit } from '@angular/core';

export class Todo {
  inTask: string;
  inInfo: string;
  check: boolean;
  constructor(inTask, inInfo) {
    this.inTask = inTask;
    this.inInfo = inInfo;
    this.check = false;
  }
}

@Component({
  selector: 'app-page-todo',
  templateUrl: './page-todo.component.html',
  styleUrls: ['./page-todo.component.css']
})
export class PageTodoComponent implements OnInit {

  inTask: string;
  inInfo: string;
  baseTotos: Todo[] = [];

  addTask() {
    this.baseTotos.push( new Todo(this.inTask, this.inInfo));
  }

  viewTask() {
    console.log(this.baseTotos);
  }

  taskDelete(a) {

    const taskIndex = this.baseTotos.indexOf(a);
    console.log('run task delete', taskIndex);
    if (taskIndex > -1) {
      this.baseTotos.splice(taskIndex, 1);
    }
 }

  constructor() { }

  ngOnInit() {
  }

}
