import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { YoutubePage  } from '../video/youtube';

@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html'
})
export class VideosPage {

  constructor(public navCtrl: NavController) {

  }

  getYoutubeVideo(){
    this.navCtrl.push(YoutubePage);
  }
}
