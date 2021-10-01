import { Component } from '@angular/core';
import { Dataset } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoTask';
  task="";
  btnDisable:boolean=true;
  Items:Array<Dataset>=[
    {
      title : "A default item",
      complete : false
    },
    {
      title : "A completed default item",
       complete: true
    }
  ];
clear=()=>{
  let arr:number[]=[]; 
  this.Items.forEach((element,index)=> {
     if(element.complete){
       arr.push(index);
     }
  });
  for (let index = arr.length-1; index>=0; index--) {
    this.Items.splice(arr[index],1);
  }
}
addTask=()=>{
  this.Items.push({
    title:this.task,
    complete:false
  });
  this.task="";
  this.btnDisable=true;
}
enableBtn=()=>{
  if(this.task.length>0 && this.task[0]!==" ")
  {this.btnDisable=false;}
  else{
    this.btnDisable=true;
  }
}
checkVal=(index:number)=>{
  this.Items[index].complete=!this.Items[index].complete;
}
}
