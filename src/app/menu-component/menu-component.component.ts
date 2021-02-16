import {Component, OnInit, Output} from '@angular/core';
import {AppService} from '../Services/AppService';
import {MenuItem} from '../Models/MenuItem';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {
  menuItems: Array<MenuItem> = [];
  constructor(appService: AppService) {
    this.menuItems = appService.getItems();
  }

  ngOnInit(): void {
  }
}
