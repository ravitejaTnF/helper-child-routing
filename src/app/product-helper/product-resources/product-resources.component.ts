import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-resources',
  templateUrl: './product-resources.component.html',
  styleUrls: ['./product-resources.component.css']
})
export class ProductResourcesComponent implements OnInit {

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }

  ngOnInit(): void {
  }

}
