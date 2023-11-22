import { Input,Component,Output, EventEmitter} from '@angular/core';
import { Todo } from '../../todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent{
        @Input() todo:Todo;
        @Input() i: number=0;
        @Output() todoDelete=new EventEmitter();
        @Output() todoCheckbox=new EventEmitter();
        constructor(){
          this.todo=new Todo();
         }
        ngOnInit():void{

        }
        Onclick(todo: Todo){
          this.todoDelete.emit(todo);
          console.log("To Do is pressed")
        }
        onCheckboxClick(todo: Todo){
          this.todoCheckbox.emit(todo);
        }

}
