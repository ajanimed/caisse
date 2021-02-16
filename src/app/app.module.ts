import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { CommandComponentComponent } from './command-component/command-component.component';
import {AppService} from './Services/AppService';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    ProductListComponentComponent,
    ProductComponentComponent,
    CommandComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
