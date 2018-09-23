import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { HomePage } from '../pages/home/home';

import { SplashPage } from '../pages/splash/splash';
import { ModalController } from 'ionic-angular';


import { WelcomesliderPage } from '../pages/welcomeslider/welcomeslider';

// import { DetailsPage } from '../pages/details/details';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomesliderPage; //HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //splashScreen.hide(); -- modified for splash screen
      let splash = modalCtrl.create(SplashPage);
      splash.present();
    });
  }
}
