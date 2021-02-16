import { Component, OnInit } from '@angular/core';
import {AppService} from '../Services/AppService';
import {Product} from '../Models/Product';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  products: Array<Product> = [];

  constructor(appService: AppService) {
    this.products = appService.getProducts('Boissons');
  }

  ngOnInit(): void {
  }
}
