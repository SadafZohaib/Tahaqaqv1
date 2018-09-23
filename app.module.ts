import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SplashPage } from '../pages/splash/splash';
import { SearchscanPage } from '../pages/searchscan/searchscan';
import { WelcomesliderPage } from '../pages/welcomeslider/welcomeslider';
import { DetailsPage } from '../pages/details/details';

// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
// import { Toast } from '@ionic-native/toast';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// import { DataServiceProvider } from '../providers/data-service/data-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashPage,
    SearchscanPage,
    WelcomesliderPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    ,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashPage,
    SearchscanPage,
    WelcomesliderPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    // ,
    // BarcodeScanner,
    // Toast,
    // DataServiceProvider
  ]
})
export class AppModule {}
