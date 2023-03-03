import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ProductHelperComponent } from './product-helper/product-helper.component';
import { HomeComponent } from './home/home.component';
import { FinderComponent } from './product-helper/finder/finder.component';
import { CategoriesComponent } from './product-helper/categories/categories.component';
import { PaymentsComponent } from './payments/payments.component';
import { DownloadsComponent } from './product-helper/downloads/downloads.component';
import { ImprintsPublishersComponent } from './product-helper/imprints-publishers/imprints-publishers.component';
import { InventoryStatusComponent } from './product-helper/inventory-status/inventory-status.component';
import { OriginatorsComponent } from './product-helper/originators/originators.component';
import { PricingDiscountsComponent } from './product-helper/pricing-discounts/pricing-discounts.component';
import { SeriesBindingsComponent } from './product-helper/series-bindings/series-bindings.component';
import { ProductResourcesComponent } from './product-helper/product-resources/product-resources.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './product-helper/products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductHelperComponent,
    HomeComponent,
    FinderComponent,
    CategoriesComponent,
    PaymentsComponent,
    DownloadsComponent,
    ImprintsPublishersComponent,
    InventoryStatusComponent,
    OriginatorsComponent,
    PricingDiscountsComponent,
    SeriesBindingsComponent,
    ProductResourcesComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
