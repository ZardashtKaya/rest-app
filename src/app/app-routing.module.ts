import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	// { path: 'tabs', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
	{ path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
	{ path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
	{ path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' },
	{ path: 'tab3', loadChildren: './pages/tab3/tab3.module#Tab3PageModule' },
	{ path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
