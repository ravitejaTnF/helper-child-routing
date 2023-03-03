import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductHelperService } from './../services/product-helper.service';

@Component({
  selector: 'app-product-helper',
  templateUrl: './product-helper.component.html',
  styleUrls: ['./product-helper.component.css']
})
export class ProductHelperComponent implements OnInit {

  constructor(private productService: ProductHelperService, private _router: Router) { }

  ngOnInit(): void {
  }
  searchText: string = '';
  showProductDetailsWhenSearchIsValid: boolean = false;
  showSearchBox: boolean = true;
  showProductDetailsDropdownDiv: boolean = false;
  showDropdown: boolean = false;
  productPageDropdownSelectedValue: string = 'Finder';
  productDataResultsFromAPIbasedOnSearchText: any = [];
  titleBesidesDropdown:string = '';
  dropdownArrayValues = ['Finder', 'Product', 'Categories & Classifications', 'Downloads', 'Imprints & Publishers', 'Inventory Status', 'Originators', 'Pricing & Discounts', 'Series & Bindings', 'Product Resources'];
  showProductdataBasedOnSearchText() {
    if (this.searchText.length > 5) {
      this.showProductDetailsWhenSearchIsValid = true;
      this.productService.getData().subscribe((res: any) => {
        this.productDataResultsFromAPIbasedOnSearchText = res;
      })
    }
    if (this.searchText.length == 0) {
      this.showProductDetailsWhenSearchIsValid = false;
    }
  }
  showProductDetailsDropdown(title:any) {
    this.titleBesidesDropdown = title;
    this.showSearchBox = false;
    this.showProductDetailsWhenSearchIsValid = false;
    this.showProductDetailsDropdownDiv = true;
    this.showDropdown = true;
  }
  navigateToCorrespondingPageBasedOnDropdownSelection() {
    //console.log(this.productPageDropdownSelectedValue);
    if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[1]) {
      this._router.navigate(['/product-helper/products']);
    } else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[0]) {
      this._router.navigate(['/product-helper/finder']);
    } else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[2]) {
      this._router.navigate(['/product-helper/categories']);
    } else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[3]) {
      this._router.navigate(['/product-helper/downloads']);
    } else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[4]) {
      this._router.navigate(['/product-helper/imprints-publishers']);
    } else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[5]) {
      this._router.navigate(['/product-helper/inventory-status']);
    } else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[7]) {
      this._router.navigate(['/product-helper/pricing-discounts']);
    } else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[6]) {
      this._router.navigate(['/product-helper/originators']);
    } else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[8]) {
      this._router.navigate(['/product-helper/series-bindings']);
    } else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[9]) {
      this._router.navigate(['/product-helper/product-resources']);
    }
  }
}
