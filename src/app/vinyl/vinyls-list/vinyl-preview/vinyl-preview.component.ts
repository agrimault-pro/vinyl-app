import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vinyl } from '../../vinyl';

@Component({
  selector: 'app-vinyl-preview',
  templateUrl: './vinyl-preview.component.html',
  styleUrls: ['./vinyl-preview.component.scss']
})
export class VinylPreviewComponent implements OnInit {

  @Input() vinyl: Vinyl;
  
  @Output() indexToDelete : EventEmitter<number> = new EventEmitter();
  @Output() indexToDisplayStudio : EventEmitter<number> = new EventEmitter();

  isEditing: boolean;

  isStudioDisplayed: boolean;
  studio: string;

  constructor() { }

  ngOnInit() {
  }

  switchEditMode() {
    this.isEditing = !this.isEditing;
  }

  getDateColor() {
    return this.isEditing ? "green" : "white";
  }

  displayStudio() {
    this.isStudioDisplayed = !this.isStudioDisplayed;
    return this.indexToDisplayStudio.emit(this.vinyl.index);
  } 

  deleteItem() {    
    console.log('VinylPreviewComponent - delete item with index: '+this.indexToDelete);
    this.indexToDelete.emit(this.vinyl.index);
  }

}
