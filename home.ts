import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';
import { SearchscanPage } from '../searchscan/searchscan';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  constructor( public navParams: NavParams, public navCtrl: NavController, public viewCtrl: ViewController, public appCtrl: App )
  {

  }
  public gotoSearchscan()
  {       this.navCtrl.push(SearchscanPage);   }

}
