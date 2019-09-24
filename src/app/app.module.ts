import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';

/* App Components */
import { EditItemComponent } from './edit-item/edit-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

/* Services */
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { RouterModule } from '@angular/router';
import { CartTableComponent } from './cart-table/cart-table.component';

@NgModule({
  declarations: [
    AppComponent,
    EditItemComponent,
    ShoppingCartComponent,
    CartTableComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports: [
    AppComponent
  ],
  providers: [ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
