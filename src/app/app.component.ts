import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {


	headerSelected: string = 'recipe';

	ngOnInit() {
		firebase.initializeApp({
			apiKey: "AIzaSyDRd-TkNKhC9dmcH_dPnVDLd1gk-Odk7kg",
			authDomain: "angular-project-ecd34.firebaseapp.com",
		});
	}

	onNavigate(feature: string) {
		this.headerSelected = feature;
	}
}
