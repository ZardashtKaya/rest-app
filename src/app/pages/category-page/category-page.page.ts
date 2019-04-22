import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events, NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-category-page',
	templateUrl: './category-page.page.html',
	styleUrls: [ './category-page.page.scss' ]
})
export class CategoryPagePage implements OnInit {
	public items: any[];
	public sub: any;
	public parameter;
	result;
	// total = 0

	menu = [
		{ id: 1, name: 'Hot Dogs', price: 2000, description: 'aaaaaaaaaa' },
		{ id: 2, name: 'Hamburgers', price: 5000, description: 'aaaaaaaaaa' },
		{ id: 3, name: 'Coffee', price: 1000, description: 'aaaaaaaaaa' },
		{ id: 4, name: 'Fried Chicken', price: 2000, description: 'aaaaaaaaaa' },
		{ id: 5, name: 'Large Pizza', price: 5000, description: 'aaaaaaaaaa' },
		{ id: 6, name: 'Small Pizza', price: 3000, description: 'aaaaaaaaaa' },
		{ id: 7, name: 'Organge Juice', price: 1000, description: 'aaaaaaaaaa' }
	];

	constructor(
		private route: ActivatedRoute,
		public events: Events,
		public navCtrl: NavController,
		private router: Router,
		private storage: Storage,
		public alertController: AlertController
	) {}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.result = params;
			console.log(this.result);
		});

		(err) => {
			console.log(err);
		};
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
			
			// this.total += items.price
			// console.log(this.total)
			await this.presentAlert();
		});
	}
}
