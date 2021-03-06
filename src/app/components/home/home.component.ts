import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 /* data = {
  pendings: [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ],

  inProgress: [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ],

  done:[
    'Get up',
    'Brush teeth',
    'Take a shower',
  ]
  } ; */

  data = {"pendings": [], "inProgress": [], "done": []};

  constructor(
    private todoService : TodoService,
  ) { }

  ngOnInit(): void {
    //this.setItems();
    this.getAllTodos();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.updateTodo();
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        this.updateTodo();
                    /*  Object.keys(this.data).forEach((key) => {
                        localStorage.setItem(key, JSON.stringify(this.data[key])); 
                      }); */
    }
    
  }

 /* addTodo(todo){
    this.data.pendings.push(todo.value);
    todo.value = " ";
    localStorage.setItem("pendings", JSON.stringify(this.data.pendings));
  }

  setItems(){

    Object.keys(this.data).forEach((key) => {
      if(!localStorage.getItem( key)){
        localStorage.setItem(key, JSON.stringify(this.data[key]));  
      } else {
        this.data[key] = JSON.parse(localStorage.getItem( key));
      }

}); */

  addTodo(todo){
    const obj = { todo: todo.value};
    this.todoService.addTodo(obj)
      .subscribe((res) => {
        console.log(res);  //hatasız çalışrsa bu satıra girer
        this.getAllTodos();
      }, (err) => { //hata varsa burayı çalıştırır
        console.log(err);
      });
  }

  getAllTodos(){
    this.todoService.getAllTodos()
      .subscribe((res)=>{
        console.log(res);
        Object.keys(res).forEach((key)=> {
          this.data[key] = res[key];
        });
        
      }, (err)=>{
        console.log(err);
      })
  }

  updateTodo(){
    this.todoService.updateTodo(this.data)
    .subscribe((res)=> {
      console.log(res);
    }, (err)=> {
      console.log(err);
    })
  }

  removeTodo(id){
    if(confirm('Bu maddeyi silmek istediğinize emin misiniz?')){
      this.todoService.removeTodo(id)
      .subscribe((res)=>{
        console.log(res);
        this.getAllTodos();
      }, (err)=> {
        console.log(err);
      });
    }
    
  }
   


  }



