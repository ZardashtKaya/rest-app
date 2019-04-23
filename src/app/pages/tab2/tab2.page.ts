import { Component, OnInit } from '@angular/core';
import { Events, AlertController, NavController, ModalController, PopoverController } from '@ionic/angular';
import { CategoryPagePage } from '../category-page/category-page.page';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-tab2',
	templateUrl: './tab2.page.html',
	styleUrls: [ './tab2.page.scss' ]
})
export class Tab2Page implements OnInit {
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
			name: 'Margherita Pizza',
			price: 7000,
			img:
				'',
			description: 'Cheese + Olive Oil'
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
		},
		{
			id: 8,
			name: 'Meat Lasagna',
			price: 6000,
			img:
				'https://www.jessicagavin.com/wp-content/uploads/2014/02/meat-lasagna-in-pan.jpg',
			description: 'Noodle + Meat + Cheese + Tomato sauce'
		},
		{
			id: 9,
			name: 'Chicken Wings',
			price: 5000,
			img:
				'https://homemadehooplah.com/wp-content/uploads/2018/07/honey-garlic-chicken-wings-1.jpg',
			description: 'Spicey or sour chicken wings. 6 pieces'
		},
		{
			id: 10,
			name: 'Caesar Salad',
			price: 6000,
			img:
				'https://www.thespruceeats.com/thmb/vttp7HVQk0jBfol4IbHgL5tmToY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/caesar-salad-2500-56a210635f9b58b7d0c62d64.jpg',
			description: 'Crouton + Lettuce + Cheese + Tomato'
		},
		{
			id: 11,
			name: 'Soup',
			price: 2500,
			img:
				'',
			description: 'Daily soup'
		},
		{
			id: 12,
			name: 'Boccolotti Pasta',
			price: 8000,
			img:	
				'',
			description: ''
		},
		{
			id: 13,
			name: 'Pepperoni Pizza',
			price: 8000,
			img:
				'',
			description: 'Pepperoni + Cheese + Pepper'	
		},
		{
			id: 14,
			name: 'Shrimp Pizza',
			price: 12000,
			img:
				'https://theblondcook.com/wp-content/uploads/2017/06/shrimp-scampi-pizza-1.jpg',
			description: 'Shrimp + Tomato Sauce + Olive Oil + Cherry Tomato + Parsely'
		},
		{
			id: 15,
			name: 'Mozzarella & Chicken Focaccia',
			price: 6000,
			img:
				'',
			description: 'Cooked Chicken + Lettuce + Sliced Mozzarella'
		},
		{
			id: 16,
			name: 'Margherita Focaccia',
			price: 5000,
			img:
				'',
			description: 'Tomato + Basil + Mozzarella'
		},
		{
			id: 17,
			name: 'Pannacotta',
			price: 3000,
			img:
				'',
			description: 'Dessert'
		},
		{
			id: 18,
			name: 'Tiramisu',
			price: 3000,
			img:
				'',
			description: 'Dessert',
		},
		{
			id: 19,
			name: 'Muffin',
			price: 2000,
			img:
				'',
			description: 'Dessert'
		},
		{
			id: 20,
			name: 'Chocolate lava cake',
			price: 4000,
			img:
				'',
			description: 'Dessert'
		},
		{
			id: 21,
			name: 'Ice Coffee',
			price: 4000,
			img:
				'',
			description: 'Coffee + Milk + Ice'
		},
		{
			id: 22,
			name: 'Latte Macchiato',
			price: 4000,
			img:
				'',
			description: 'Espresso + Milk Cream'
		},
		{
			id: 23,
			name: 'Hot Chocolate',
			price: 3000,
			img: 
				'https://www.cookingclassy.com/wp-content/uploads/2018/10/hot-chocolate-15.jpg',
			description: 'Hot chocolate'
		},
		{
			id: 24,
			name: 'Slush',
			price: 2500,
			img:
				'https://chocolato.co.uk/wp-content/uploads/2016/10/slush-drink-machine-682x1024.jpg',
			description: 'Milk Slush, Pomegrant Slush, Lemon Slush, Chocolate Slush'
		},
		{
			id: 25,
			name: 'Water',
			price: 500,
			img:
				'https://img.jakpost.net/c/2016/06/13/2016_06_13_6370_1465804273._large.jpg',
			description: 'Cold or Warm water'
		},
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
