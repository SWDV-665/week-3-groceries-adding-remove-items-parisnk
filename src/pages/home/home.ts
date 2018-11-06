import {AlertController} from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ToastController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//Defining a variable called title to hold the value of ion title in ion toolbar
  title = "Grocery";
//Defining an array called items to hold the name and quantity of items
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
//injecting ToastController and AlertController in the constructor
constructor(public navCtrl : NavController, public toastCtrl : ToastController, public alertCtrl : AlertController) {

  }
  //Defing removeItem function for removing items and show the removed item in a toast
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
//Defining a function called showAddItemPrompt for adding items using an alert box
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


