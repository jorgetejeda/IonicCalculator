import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public number: number[] = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  public box: any[] = [];
  public result: string;
  constructor(public navCtrl: NavController) { }

  public Clear() {
    this.box = [];
    this.result = "";
  }

  public boxNumber(num) {
    // console.log(num);
    this.box.push(num);
  }

  public opeDiv() {
    this.box.push("/");
  }

  public opeRest() {
    this.box.push("-");
  }

  public opeSum() {
    this.box.push("+");
  }

  public opeMult() {
    this.box.push("*");
  }

  public Operation() {
    this.result = eval(this.box.join("").toString());
  }

}
