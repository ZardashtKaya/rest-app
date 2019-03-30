import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-category-page',
	templateUrl: './category-page.page.html',
	styleUrls: [ './category-page.page.scss' ]
})
export class CategoryPagePage implements OnInit {
	constructor(private activatedRoute: ActivatedRoute) {}
	passedId: String[];
	ngOnInit() {
		this.passedId = this.activatedRoute.snapshot.paramMap.get('myid').split(',');
	}
}
