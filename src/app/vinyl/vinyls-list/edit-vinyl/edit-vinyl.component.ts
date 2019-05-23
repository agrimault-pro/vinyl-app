import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { VinylService } from '../../vinyl.service';
import { Vinyl } from '../../vinyl';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { JitSummaryResolver } from '@angular/compiler';

@Component({
  selector: 'app-edit-vinyl',
  templateUrl: './edit-vinyl.component.html',
  styleUrls: ['./edit-vinyl.component.scss']
})
export class EditVinylComponent implements OnInit {

  vinyl: Vinyl;

  vinylForm: FormGroup;

  titleCtrl: FormControl;
  artisteCtrl: FormControl;
  imageUrlCtrl: FormControl;
  releaseDateCtrl: FormControl;
  studioCtrl: FormControl;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private vinylService: VinylService,
              private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.initForm();
    this.loadVinyl();
  }

  initForm() {
    this.titleCtrl = this.fb.control('', {
      validators: Validators.required,
      updateOn: "blur"
    });
    this.artisteCtrl = this.fb.control('', Validators.required);
    this.imageUrlCtrl = this.fb.control('', Validators.required);
    this.releaseDateCtrl = this.fb.control('', Validators.required);
    this.studioCtrl = this.fb.control('', Validators.required);

    this.vinylForm = this.fb.group({
      title: this.titleCtrl,
      artiste: this.artisteCtrl,
      imageUrl: this.imageUrlCtrl,
      releaseDate: this.releaseDateCtrl,
      studio: this.studioCtrl
    });
  }

  loadVinyl() {
    this.route.params.subscribe(params => {
      const index = +params.index;
      console.log('index = ' + index);
      this.vinyl = this.vinylService.getOne(index);

      this.titleCtrl.setValue(this.vinyl.title);
      this.artisteCtrl.setValue(this.vinyl.artiste);
      this.imageUrlCtrl.setValue(this.vinyl.imageUrl);

      let myMoment: moment.Moment = moment(this.vinyl.releaseDate);
      this.releaseDateCtrl.setValue(myMoment.year());

      this.studioCtrl.setValue(this.vinyl.studio);
    });
  }

  updateVinyl() {    
    this.vinyl.title = this.titleCtrl.value;
    this.vinyl.artiste = this.artisteCtrl.value;
    this.vinyl.imageUrl = this.imageUrlCtrl.value;
    
    let myMoment: moment.Moment = moment(this.vinyl.releaseDate);
    this.vinyl.releaseDate = myMoment.year(this.releaseDateCtrl.value).toDate();
        
    this.vinyl.studio = this.studioCtrl.value;

    console.log('vinyl title: '+ this.vinyl.title);
    console.log('vinyl artiste: '+ this.vinyl.artiste);  
    console.log('vinyl releaseDate: '+ this.vinyl.releaseDate);  
    
    this.router.navigate(['vinyl']);
    
  }
}
