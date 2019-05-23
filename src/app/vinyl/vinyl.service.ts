import { Injectable } from '@angular/core';
import { Vinyl } from './vinyl';

@Injectable({
  providedIn: 'root'
})
export class VinylService {

  vinyls: Array<Vinyl> = [{
    index: 0,
    title: 'Bad',
    artiste: 'Michael Jackson',
    imageUrl: 'https://img-4.linternaute.com/PI-AYLwdrSAlAsBVE53jZasrWYM=/350x/smart/4184ae2fdda74cb5b2e150bc98efebe8/ccmcms-linternaute/19006.jpg',
    releaseDate: new Date(1972, 2, 1),
    studio: 'studio_1'
  }, {
    index: 1,
    title: 'Uprising',
    artiste: 'Bob marley and the Wailers',
    imageUrl: 'https://img.cdandlp.com/2017/06/imgL/118865816.jpg',
    releaseDate: new Date(1980, 7, 10),
    studio: 'studio_2'
  }, {
    index: 2,
    title: 'Hendrix in the west',
    artiste: 'Jimi Hendrix',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Hendrix_in_the_west.jpg', 
    releaseDate: new Date(1972, 2, 1),
    studio: 'studio_3'
  }, {
    index: 3,
    title: 'Porgy and Bess',
    artiste: 'Louis Armstrong et Ella Fitzgerald',
    imageUrl: 'https://media1.jpc.de/image/w600/front/0/8436542011464.jpg', 
    releaseDate: new Date(1958, 9, 30),
    studio: 'studio_4'
  }];

  constructor() { }
  
  getAll() : Array<Vinyl> {
    return this.vinyls;
  }

  getOne(index: number) : Vinyl {
    return this.vinyls.find(
      vinyl => vinyl.index == index
    );
  }

  updateOne(vinyl: Vinyl) : Array<Vinyl> {
    if(vinyl == null) throw Error('updateOne - vinyl to update is null and must not be !');
    const vinylToBeUpdated = this.getOne(vinyl.index);
    if(vinylToBeUpdated == null) throw Error('updateOne - vinylToBeUpdated hasn\'t been retrieved in the data !');
    this.vinyls[this.vinyls.indexOf(vinylToBeUpdated)] = vinyl;
    return this.vinyls;
  }

  addOne(vinyl : Vinyl) : Array<Vinyl> {
    if(vinyl == null) throw Error('addOne - vinyl to add is null and must not be !');
    this.vinyls.push(vinyl);
    return this.vinyls;
  }
  
  delete(index: number) : Array<Vinyl> {
    const vinyl = this.getOne(index);
    if(vinyl == null) throw Error('delete - vinyl to delete does not exist !');
    this.vinyls.splice(this.vinyls.indexOf(vinyl),1);
    return this.vinyls;
  }

}
