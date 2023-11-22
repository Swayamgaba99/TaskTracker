import { Component,Output,EventEmitter } from '@angular/core';
import { Todo } from '../todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  title:string="";
  desc:string="";
  Onsubmit(){
    const todo={
      sno:1,
      title:this.title,
      desc:this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
