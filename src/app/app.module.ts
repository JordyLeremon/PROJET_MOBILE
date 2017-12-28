import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MusicPage } from '../pages/music/music';
import { NewsPage } from '../pages/news/news';
import { VideosPage } from '../pages/videos/videos';
import { AccueilPage } from '../pages/accueil/accueil';
import { ConnexionPage } from '../pages/connexion/connexion';
import { TabsPage } from '../pages/tabs/tabs';
import { YoutubePage} from '../pages/video/youtube';
import {AngularFireModule, FirebaseAppConfig } from "angularfire2";
import { AngularFireAuthModule} from "angularfire2/auth";
import { AngularFireDatabaseModule} from "angularfire2/database";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyAAGNwoNrAjoAAByzsPo33tUikaGLNeurc",
  authDomain: "onlinestream-8f5b3.firebaseapp.com",
  databaseURL: "https://onlinestream-8f5b3.firebaseio.com",
  projectId: "onlinestream-8f5b3",
  storageBucket: "onlinestream-8f5b3.appspot.com",
  messagingSenderId: "166710289422"
}

@NgModule({
  declarations: [
    MyApp,
    MusicPage,
    NewsPage,
    VideosPage,
    AccueilPage,
    ConnexionPage,
    YoutubePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MusicPage,
    NewsPage,
    VideosPage,
    AccueilPage,
    ConnexionPage,
    YoutubePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
