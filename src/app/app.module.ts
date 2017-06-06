import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ProfilePage} from "./pages/profile/profile";
import {StatsPage} from "./pages/stats/stats";
import {TabsPage} from "./pages/tabs/tabs";
import {AchievemetPage} from "./pages/trophy/trophy";

@NgModule({
  declarations: [
    MyApp,
      ProfilePage,
      StatsPage,
      TabsPage,
      AchievemetPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
