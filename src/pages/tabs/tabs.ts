import { Component } from '@angular/core';

import { VideosPage } from '../videos/videos';
import { MusicPage } from '../music/music';
import { NewsPage } from '../news/news';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VideosPage;
  tab2Root = MusicPage;
  tab3Root = NewsPage;

  constructor() {

  }
}
