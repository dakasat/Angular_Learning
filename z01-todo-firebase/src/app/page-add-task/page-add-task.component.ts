import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectFactory } from 'angularfire2/database';


@Component({
  selector: 'app-page-add-task',
  templateUrl: './page-add-task.component.html',
  styleUrls: ['./page-add-task.component.css']
})
export class PageAddTaskComponent implements OnInit {
  dateValue: number = Date.now();

  items: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/todo');
  }

  inTodoName: string;
  inTodoNote: string;
  todoStatus: boolean;

  ngOnInit() {
  }

  addTodo() {
    this.items.push({
      todoName:   this.inTodoName,
      todoNote:   this.inTodoNote,
      addDate:    this.dateValue,
      todoStatus: false
    });
    this.inTodoName = '';
    this.inTodoNote = '';
  }

  delTodo(key) {
    this.items.remove(key);
  }

  changeStatus(key, status) {
    // console.log(this.todoStatus, key, status);
    this.items.update(key, {todoStatus: status});
  }

  // consoleLog() {
  //   // console.log(this.todoStatus);
  // }

}
