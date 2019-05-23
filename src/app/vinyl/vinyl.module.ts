import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinylPreviewComponent } from './vinyls-list/vinyl-preview/vinyl-preview.component';
import { SharedModule } from '../shared/shared.module';
import { VinylsListComponent } from './vinyls-list/vinyls-list.component';
import { RouterModule } from '@angular/router';
import { VINYL_ROUTES } from './vinyl.route';
import { EditVinylComponent } from './vinyls-list/edit-vinyl/edit-vinyl.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VinylPreviewComponent, VinylsListComponent, EditVinylComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(VINYL_ROUTES)
  ]
})
export class VinylModule { }
