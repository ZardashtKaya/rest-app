import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProcessService {
	constructor() {}
}

export interface ProcessComponent {
	data: any;
}
