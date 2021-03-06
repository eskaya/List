import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( 
    @Inject('url') private url,
    private http: HttpClient
    ) { }


 addTodo(obj){
   return this.http.post(this.url, obj);
 }

 getAllTodos(){
   return this.http.get(this.url);
 } 

 updateTodo(obj){
   return this.http.put(this.url,obj);
 }

 removeTodo(id){
   return this.http.delete('https://api.limantech.com/todo/todo/'+id);
 }

}

