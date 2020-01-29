import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public parentData;
  @Output()  childEvent=new EventEmitter<string>();

messageToSend:string='hi parent';

  constructor() { }

  ngOnInit() {
  }

  
messageToParent(message:string){
  this.childEvent.emit(message);
}
}