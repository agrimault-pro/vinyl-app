import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counting-buttons',
  templateUrl: './counting-buttons.component.html',
  styleUrls: ['./counting-buttons.component.scss']
})
export class CountingButtonsComponent implements OnInit {

  @Input() counter: Date = new Date();
  @Output() counterChange = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
  }

  counterIncrement() {
    this.counter = new Date(this.counter.getFullYear()+1,
                            this.counter.getMonth(),
                            this.counter.getDate());
    this.emitValue();
  }

  counterDecrement() {    
    this.counter = new Date(this.counter.getFullYear()-1,
                            this.counter.getMonth(),
                            this.counter.getDate());
    this.emitValue();
  }

  emitValue() {
    this.counterChange.emit(this.counter);
  }
}
