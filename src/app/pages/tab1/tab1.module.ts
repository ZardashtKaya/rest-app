import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1Page } from './tab1.page';

const routes: Routes = [
	{
		path: '',
		component: Tab1Page
	}
];
@Component({
	selector: 'tab1',
	templateUrl: 'tab1.page.html'
})
@NgModule({
	imports: [ CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes) ],
	declarations: [ Tab1Page ]
})
export class Tab1PageModule {
	constructor() {}
}
