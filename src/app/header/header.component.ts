import { Response } from '@angular/http';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
	isLogin: boolean;

	constructor(private dataStorageService: DataStorageService, public authService: AuthService){}
	
	ngOnInit(){
		this.isLogin = this.authService.isAuthenticate();
	}

	onLoad(){
		this.dataStorageService.getRecipes();
	}
	
	onSave(){
		this.dataStorageService.storeRecipes().subscribe(
			(response: Response) => {
				console.log(response);
			}
		);
	}

	onLogout(){
		this.authService.logoutUser();
	}

}