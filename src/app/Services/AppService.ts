import {MenuItem} from '../Models/MenuItem';
import {Injectable} from '@angular/core';
import {Product} from '../Models/Product';

@Injectable({
  providedIn: 'root',
})

export class AppService{
  getItems(){
    const MenuItem1: MenuItem = new MenuItem();
    MenuItem1.name = 'Boissons';
    const MenuItem2: MenuItem = new MenuItem();
    MenuItem2.name = 'Crepes';
    const MenuItem3: MenuItem = new MenuItem();
    MenuItem3.name = 'Glaces';
    const MenuItems: Array<MenuItem> = [
      MenuItem1,
      MenuItem2,
      MenuItem3
    ];
    return MenuItems;
  }
  getProducts(category: string){
    const Product1: Product = new Product();
    Product1.name = 'Product1';
    Product1.price = 3;
    Product1.image = 'https://img.lovepik.com/free_png/32/42/82/20v58PICD9d7z4V41T3Ui_PIC2018.png_860.png';
    Product1.category = 'Boissons';
    const Product2: Product = new Product();
    Product2.name = 'Product2';
    Product2.price = 4.3;
    Product2.image = 'https://img.lovepik.com/free_png/32/42/82/20v58PICD9d7z4V41T3Ui_PIC2018.png_860.png';
    Product2.category = 'Boissons';
    const Product3: Product = new Product();
    Product3.name = 'Product3';
    Product3.price = 6;
    Product3.image = 'https://img.lovepik.com/free_png/32/42/82/20v58PICD9d7z4V41T3Ui_PIC2018.png_860.png';
    Product3.category = 'Boissons';
    const Product4: Product = new Product();
    Product4.name = 'Product4';
    Product4.price = 2;
    Product4.image = 'https://img.lovepik.com/free_png/32/42/82/20v58PICD9d7z4V41T3Ui_PIC2018.png_860.png';
    Product4.category = 'Crepes';
    const Product5: Product = new Product();
    Product5.name = 'Product5';
    Product5.price = 8;
    Product5.image = 'https://img.lovepik.com/free_png/32/42/82/20v58PICD9d7z4V41T3Ui_PIC2018.png_860.png';
    Product5.category = 'Glaces';
    const Product6: Product = new Product();
    Product6.name = 'Product6';
    Product6.price = 4;
    Product6.image = 'https://img.lovepik.com/free_png/32/42/82/20v58PICD9d7z4V41T3Ui_PIC2018.png_860.png';
    Product6.category = 'Glaces';
    const Products: Array<Product> = [
      Product1,
      Product2,
      Product3,
      Product4,
      Product5,
      Product6
    ].filter(product => product.category === category);
    return Products;
  }
}
