import {Component} from '@angular/core';
import {Input,Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent{

@Input() receivedChildMessage:string;
@Output() messageToEmit=new EventEmitter<string>();

messageToSendP:string="Hello Parent!";

sendToChild(message:string){
  this.messageToSendP=message;
}

getMessage(message:string){
  this.receivedChildMessage=message;
}

}