import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from'../tabs/tabs';
import { AngularFireAuth } from "angularfire2/auth";
/**
 * Generated class for the ConnexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class ConnexionPage {
  nextPage = TabsPage;
  loginEmail: string = '';
  loginPassword: string = '';
  signupEmail: string = '';
  signupPassword: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(userData => {
      console.log(userData);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnexionPage');
  }
login(form){
  this.afAuth.auth.signInWithEmailAndPassword(form.value.loginEmail, form.value.loginPassword).then( user => {
    console.log(user);
  }).catch(err => {
    alert(err.message);
  })
}

signup(form){
  this.afAuth.auth.createUserWithEmailAndPassword(form.value.signupEmail, form.value.signupPassword).then( user => {
    console.log(user);
  }).catch(err => {
    alert(err.message);
  })
}
logout(){
  this.afAuth.auth.signOut().then( data => {
    console.log(data);
  }).catch(err => {
    alert(err.message);
  })
}
}
