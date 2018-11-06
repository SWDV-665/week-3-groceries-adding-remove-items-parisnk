import {AlertController} from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ToastController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";

  items = [
    {
      name: "milk",
      quantity: 2
    },
    {
      name: "bread",
      quantity: 1
    },
    {
      name: "banana",
      quantity: 3
    },
    {
      name: "sugar",
      quantity: 1
    },
  ];

constructor(public navCtrl : NavController, public toastCtrl : ToastController, public alertCtrl : AlertController) {

  }
  removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = this
    .toastCtrl
    .create({message: 'Removing Item - ' + index + "...", duration: 3000});
    toast.present();
    this.items.splice(index, 1);
}
   addItem(){
     console.log("Adding item")
     this.showAddItemPrompt();
   }
showAddItemPrompt() {
  const prompt = this
    .alertCtrl
    .create({
      title: 'Add item',
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
  prompt.present();
}
  }


