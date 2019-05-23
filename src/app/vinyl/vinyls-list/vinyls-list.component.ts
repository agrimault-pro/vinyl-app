import { Component, OnInit } from '@angular/core';
import { Vinyl } from '../vinyl';
import { VinylService } from '../vinyl.service';

@Component({
  selector: 'app-vinyls-list',
  templateUrl: './vinyls-list.component.html',
  styleUrls: ['./vinyls-list.component.scss']
})
export class VinylsListComponent implements OnInit {

  title = 'the vinyl management app ';
  vinyls: Array<Vinyl>;

  constructor(private vinylService: VinylService) {
  }

  ngOnInit(): void {
    this.vinyls = this.vinylService.getAll();
  }

  trackByFn(index, item: Vinyl) {
    return item.title;
  }

  deleteItem(indexToDelete: number) {
    console.log('AppComponent - delete item with index: '+indexToDelete);
    this.vinyls = this.vinylService.delete(indexToDelete);
  }

  displayStudio(index: number) {
    console.log('AppComponent - displayStudio with index: '+index);
    return this.vinylService.getOne(index);
  }
}
