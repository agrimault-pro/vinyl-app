import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountingButtonsComponent } from './counting-buttons/counting-buttons.component';

@NgModule({
  declarations: [CountingButtonsComponent],
  imports: [
    CommonModule
  ],
  exports:[CountingButtonsComponent]
})
export class SharedModule { }
