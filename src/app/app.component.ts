import { Component } from '@angular/core';
import { Dataset } from './model';
import {FormControl,FormGroup,Validators} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textForm:FormGroup;
  title = 'todoTask';
  constructor(){
    this.textForm=new FormGroup({
      'text':new FormControl("",Validators.required),
    });
  }
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
    title:this.textForm.controls['text'].value,
    complete:false
  });
  this.textForm.patchValue({
    text:" "
  });
}
checkVal=(index:number)=>{
  this.Items[index].complete=!this.Items[index].complete;
}
}
