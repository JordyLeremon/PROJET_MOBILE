import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'page-music',
  templateUrl: 'music.html'
})
export class MusicPage {

  arrData= []
  myInput

  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
    this.fdb.list("/myItems/").valueChanges().subscribe(_data => {
      this.arrData = _data;

      console.log(this.arrData)
    });
  }

  btnAddClicked(){
    this.fdb.list("/myItems/").push(this.myInput);
  }
  delete(i){
    this.fdb.list("/myItems/").remove(this.arrData[i].$Key);
  }
}
