import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public parentData;
  @Output()  childEvent=new EventEmitter<string>();
messageToParent(message:string){
  this.childEvent.emit(message);
}

  constructor() { }

  ngOnInit() {
  }

}