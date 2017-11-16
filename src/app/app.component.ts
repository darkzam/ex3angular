import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	option = 'first';	
	classDiv = 'selector first';
	clickNumber = 0;
	mouseOverStatus = false;


	constructor(){}


	onChange(event: any){

		this.option =  (<HTMLOptionElement>event.target).value;
		this.classDiv = 'selector ' + this.option;
	}
}
