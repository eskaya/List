import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import { NotFoundComponent} from './components/not-found/not-found.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { TodoService } from './services/todo.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule  ,
    MatButtonModule,  
    MatCheckboxModule,
    MatSliderModule ,
    MatInputModule,
    MatCardModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    TodoService,
    { provide: 'url', useValue: 'https://api.limantech.com/todo/todo'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
