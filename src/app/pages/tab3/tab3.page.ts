import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Response } from '@angular/http';

@Component({
	selector: 'app-tab3',
	templateUrl: './tab3.page.html',
	styleUrls: [ './tab3.page.scss' ]
})
export class Tab3Page implements OnInit {
	total = 0;
	itemsToBeOrdered;
	constructor(private storage: Storage) {}

	ionViewDidEnter() {
		this.storage.get('items').then((items: any) => {
			this.itemsToBeOrdered = items;
			// for (let itm of items) {
			// 	console.log(itm);
			// 	// this.total = this.total += itm.price;
			// }
		});
	}

	add() {
		this.storage.get('items').then((items: any) => {
			this.itemsToBeOrdered = items;
			if (this.total==0){
				
				for (let itm of items) {
	
						this.total = this.total += itm.price;
						console.log("Item Price: "+itm.price)
						console.log("Item total: "+this.total);
					
				}
			}
		});

	}
	name:string;
	tableNumber:String
	notes:String
	
	order() {
		this.storage.set('items', []);
		this.total = 0;
		



	}

	clear() {
		this.storage.set('items', []);
		this.total = 0;
		this.add()
	}

	ngOnInit() {}
}
