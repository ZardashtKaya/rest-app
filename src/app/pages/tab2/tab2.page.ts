import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, PopoverController } from '@ionic/angular';

@Component({
	selector: 'app-tab2',
	templateUrl: './tab2.page.html',
	styleUrls: [ './tab2.page.scss' ]
})
export class Tab2Page implements OnInit {
	alcohol_array = [ '1', '2', '3' ];
	nonalcohol_array = [ '4', '5', '6' ];
	cocktails_array = [ '7', '8', '9' ];
	hotDrinks_array = [ 'a', 'b', 'c' ];
	pizzas_array = [ 'a', 'b', 'c' ];
	burgers_array = [ 'a', 'b', 'c' ];
	salads_array = [ 'a', 'b', 'c' ];
	desserts_array = [ '1', '1', '2' ];

	constructor(private nav: NavController) {}

	alcohol() {
		this.nav.navigateForward(`/category-page/${this.alcohol_array}`);
	}
	nonalcohol() {
		this.nav.navigateForward(`/category-page/${this.nonalcohol_array}`);
	}
	cocktails() {
		this.nav.navigateForward(`/category-page/${this.cocktails_array}`);
	}
	hotDrinks() {
		this.nav.navigateForward(`/category-page/${this.hotDrinks_array}`);
	}
	pizzas() {
		this.nav.navigateForward(`/category-page/${this.pizzas_array}`);
	}
	burgers() {
		this.nav.navigateForward(`/category-page/${this.burgers_array}`);
	}
	salads() {
		this.nav.navigateForward(`/category-page/${this.salads_array}`);
	}
	desserts() {
		this.nav.navigateForward(`/category-page/${this.desserts_array}`);
	}
	ngOnInit() {}
}
