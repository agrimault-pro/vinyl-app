import { Component, OnInit } from '@angular/core';
import { Vinyl } from './vinyl/vinyl';
import { VinylService } from './vinyl/vinyl.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        console.log('event.urlAfterRedirects = '+event.urlAfterRedirects);
      }
    });
  
  }
}
