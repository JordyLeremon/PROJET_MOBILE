import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-youtube',
    template: `
    <ion-header>
    <ion-navbar>
        <ion-title>Vidéo Youtube</ion-title>
    </ion-navbar>
    </ion-header>
    <ion-content>
        <iframe width="420" height="315" src="https://www.youtube.com/embed/0E6Bsd0_9WM" frameborder="0" allowfullscreen></iframe>
    `
  })
  export class YoutubePage {
    
      constructor(public navCtrl: NavController) {
    
      }
    
    }