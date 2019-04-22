import { Component, OnInit } from '@angular/core';
import { Events, AlertController, NavController, ModalController, PopoverController } from '@ionic/angular';
import { CategoryPagePage } from '../category-page/category-page.page';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-tab1',
	templateUrl: './tab1.page.html',
	styleUrls: [ './tab1.page.scss' ]
})
export class Tab1Page implements OnInit {


	menu = [
		{
			id: 1,
			name: 'Hot Dogs',
			price: 2000,
			img:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/220px-Hotdog_-_Evan_Swigart.jpg',
			description: 'Hot Dog + Tomatoes + Sauce'
		},
		{
			id: 2,
			name: 'Hamburgers',
			price: 5000,
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/250px-RedDot_Burger.jpg',
			description: 'Burger + Cheese + Lettuce + Tomatoes + Onions'
		},
		{
			id: 3,
			name: 'Turkish Coffee',
			price: 1000,
			img:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/T%C3%BCrk_Kahvesi_-_Bakir_Cezve.jpg/220px-T%C3%BCrk_Kahvesi_-_Bakir_Cezve.jpg',
			description: 'Bitter Coffee'
		},
		{
			id: 4,
			name: 'Fried Chicken',
			price: 2000,
			img:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Fried-Chicken-Set.jpg/300px-Fried-Chicken-Set.jpg',
			description: 'Fried Chicken Tenders + Tomatoes'
		},
		{
			id: 5,
			name: 'Large Pizza',
			price: 5000,
			img:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
			description: 'Chicken + Mushrooms + Tomatoes'
		},
		{
			id: 6,
			name: 'Small Pizza',
			price: 3000,
			img:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
			description: 'Chicken + Tomatoes'
		},
		{
			id: 7,
			name: 'Organge Juice',
			price: 1000,
			img:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Orange_juice_1_edit1.jpg/220px-Orange_juice_1_edit1.jpg',
			description: 'Orange extract + Lemon extract'
		}
	];

	itminfo: String;

	// public items: any;
	public constructor(
		public events: Events,
		private navCtrl: NavController,
		private http: HttpClient,
		private router: Router,
		private storage: Storage,
		public alertController: AlertController
	) {
		// events.publish('items', this.items);
		// events.publish(this.item_name);
	}
	itemDetail(itm) {
		console.log(itm);
		// this.router.navigate([ '/category-page', { id: itm.id} ]);
		this.navCtrl.navigateForward(`/category-page/${itm.id}`);
		// this.navCtrl.navigateForward()
	}
	async presentAlert() {
		const alert = await this.alertController.create({
			header: 'Order',
			subHeader: 'Placement',
			message: 'Item is in bill',
			buttons: [ 'OK' ]
		});

		await alert.present();
	}
	placeOrder(itm) {
		this.storage.get('items').then(async (items: any) => {
			if (items === null) {
				items = [ itm ];
			} else {
				items.push(itm);
			}
			console.log(items);
			this.storage.set('items', items);
			await this.presentAlert();
		});
	}

	ngOnInit() {}


}
