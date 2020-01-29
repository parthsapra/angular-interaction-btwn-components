import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public name = "prince";
receiveMessage:string;
messageSend:string='';
  constructor() { }

  ngOnInit() {
  }

sendMessage(message:string){
  this.messageSend=message;
}

  getMessage(message:string){
    this.receiveMessage=message;
  }

}