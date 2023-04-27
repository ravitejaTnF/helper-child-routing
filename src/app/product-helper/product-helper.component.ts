import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
    this.setFlags();
    this.getDataFromsessionStorage();
  }
  searchText: string = '';
  showProductDetailsWhenSearchIsValid: boolean = false;
  showSearchBox: boolean = true;
  showProductDetailsDropdownDiv: boolean = false;
  showDropdown: boolean = false;
  productPageDropdownSelectedValue: string = 'Finder';
  productDataResultsFromAPIbasedOnSearchText: any = [];
  titleBesidesDropdown: string = '';
  title: string = '';
  isbn: string = '';
  sku: string = '';
  dropdownArrayValues = ['Product', 'Categories & Classifications', 'Downloads', 'Imprints & Publishers', 'Inventory Status', 'Originators', 'Pricing & Discounts', 'Series & Bindings', 'Product Resources'];
  
  setFlags(){
    console.log('in set flags');
    this.showProductDetailsWhenSearchIsValid = false;
    this.showSearchBox = true;
    this.showProductDetailsDropdownDiv = false;
    this.showDropdown = false;
  }
  // based on the text entered into search box we are showing the product data..
  showProductdataBasedOnSearchText() {
    if (this.searchText.length > 5) {
      this.showProductDetailsWhenSearchIsValid = true;
      this.productService.getData().subscribe((res: any) => {
        sessionStorage.setItem('isbn',this.searchText);
        sessionStorage.setItem('bookdata',JSON.stringify(res));
        this.productDataResultsFromAPIbasedOnSearchText = res;
      })
    }
    if (this.searchText.length == 0) {
      this.showProductDetailsWhenSearchIsValid = false;
    }
  }
  // This will be displayed only when 
  showProductDetailsDropdown(title: any, isbn: any, sku: any) {
    this.title = title;
    this.isbn = isbn;
    this.sku = sku;
    this.titleBesidesDropdown = title;
    this.showSearchBox = false;
    this.showProductDetailsWhenSearchIsValid = false;
    this.showProductDetailsDropdownDiv = true;
    this.showDropdown = true;
    this._router.navigate(['/product-helper/products'],{ state: { data: { title: this.title, isbn: this.isbn, sku: this.sku } } });
  }
  // Navigating to pages based upon the dropdown selection
  navigateToCorrespondingPageBasedOnDropdownSelection() {
    //console.log(this.productPageDropdownSelectedValue);
    if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[1]) {
      this._router.navigate(['/product-helper/products'], { state: { data: { title: this.title, isbn: this.isbn, sku: this.sku } } });
    }else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[2]) {
      this._router.navigate(['/product-helper/categories'], { state: { data: { title: this.title, isbn: this.isbn, sku: this.sku } } });
    } else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[3]) {
      this._router.navigate(['/product-helper/downloads'], { state: { data: { title: this.title, isbn: this.isbn, sku: this.sku } } });
    } else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[4]) {
      this._router.navigate(['/product-helper/imprints-publishers'], { state: { data: { title: this.title, isbn: this.isbn, sku: this.sku } } });
    } else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[5]) {
      this._router.navigate(['/product-helper/inventory-status'], { state: { data: { title: this.title, isbn: this.isbn, sku: this.sku } } });
    } else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[7]) {
      this._router.navigate(['/product-helper/pricing-discounts'], { state: { data: { title: this.title, isbn: this.isbn, sku: this.sku } } });
    } else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[6]) {
      this._router.navigate(['/product-helper/originators'], { state: { data: { title: this.title, isbn: this.isbn, sku: this.sku } } });
    } else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[8]) {
      this._router.navigate(['/product-helper/series-bindings'], { state: { data: { title: this.title, isbn: this.isbn, sku: this.sku } } });
    } else if (this.productPageDropdownSelectedValue == this.dropdownArrayValues[9]) {
      this._router.navigate(['/product-helper/product-resources'], { state: { data: { title: this.title, isbn: this.isbn, sku: this.sku } } });
    }
  }
  getDataFromsessionStorage(){
    if(sessionStorage.getItem('isbn') != null){
      let data = JSON.parse(sessionStorage.getItem("bookdata") || "[]");
      let isbn = sessionStorage.getItem('isbn');
      this.searchText = isbn != null ? isbn : this.searchText;
      this.searchText = isbn != null ? isbn : '';
      this.showProductdataBasedOnSearchText();
    }
  }
}
