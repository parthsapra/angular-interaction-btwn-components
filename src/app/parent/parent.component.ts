import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  // public name = "prince";
receiveMessageFromChild:string;
messageSend:string='';
  constructor() { }

  ngOnInit() {
  }

sendMessageToChild(message:string){
  this.messageSend=message;
}

  getMessage(message:string){
    this.receiveMessageFromChild=message;
  }

}