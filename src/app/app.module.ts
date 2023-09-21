import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
