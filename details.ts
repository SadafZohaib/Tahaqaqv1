import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

   public items : Array<any> = []; //Used to store returned PHP data

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewWillEnter() : void
   {
      this.load();
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  /**
    * Retrieve the JSON encoded data from the remote server
    * Using Angular's Http class and an Observable - then
    * assign this to the items array for rendering to the HTML template
    */
   load() : void
   {
      this.http
      .get('http://rpcompany.com.sa/info.php?barcode_id=01234567890124')
      .subscribe((data : any) =>
      {
         console.dir(data);
         this.items = data;
      },
      (error : any) =>
      {
         console.dir(error);
      });
   }

}
