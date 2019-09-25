import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { FormsModule }             from '@angular/forms';
import { RouterModule }            from '@angular/router';
import { HttpClientModule }        from '@angular/common/http';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';

/* App Components */
import { EditItemComponent }     from 'src/app/components/edit-item/edit-item.component';
import { ShoppingCartComponent } from 'src/app/components/shopping-cart/shopping-cart.component';
import { CartTableComponent }    from 'src/app/components/cart-table/cart-table.component';

/* Services */
import { ShoppingCartService }   from 'src/app/services/shopping-cart.service';
import { CommunicationService }  from 'src/app/services/communication.service';

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
  providers: [ShoppingCartService, CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
