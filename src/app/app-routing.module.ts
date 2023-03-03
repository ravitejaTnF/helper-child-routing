import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductHelperComponent } from './product-helper/product-helper.component';
import { FinderComponent } from './product-helper/finder/finder.component';
import { CategoriesComponent } from './product-helper/categories/categories.component';
import { PaymentsComponent } from './payments/payments.component';
import { DownloadsComponent } from './product-helper/downloads/downloads.component';
import { ImprintsPublishersComponent } from './product-helper/imprints-publishers/imprints-publishers.component';
import { InventoryStatusComponent } from './product-helper/inventory-status/inventory-status.component';
import { OriginatorsComponent } from './product-helper/originators/originators.component';
import { PricingDiscountsComponent } from './product-helper/pricing-discounts/pricing-discounts.component';
import { ProductResourcesComponent } from './product-helper/product-resources/product-resources.component';
import { SeriesBindingsComponent } from './product-helper/series-bindings/series-bindings.component';
import { ProductsComponent } from './product-helper/products/products.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'payments', component: PaymentsComponent },
  {
    path: 'product-helper',
    component: ProductHelperComponent,
    children: [
      { path: 'finder', component: FinderComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'downloads', component: DownloadsComponent },
      { path: 'imprints-publishers', component: ImprintsPublishersComponent },
      { path: 'inventory-status', component: InventoryStatusComponent },
      { path: 'originators', component: OriginatorsComponent },
      { path: 'pricing-discounts', component: PricingDiscountsComponent },
      { path: 'product-resources', component: ProductResourcesComponent },
      { path: 'series-bindings', component: SeriesBindingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
