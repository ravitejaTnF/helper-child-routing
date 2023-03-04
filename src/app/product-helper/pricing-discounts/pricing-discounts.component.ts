import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing-discounts',
  templateUrl: './pricing-discounts.component.html',
  styleUrls: ['./pricing-discounts.component.css']
})
export class PricingDiscountsComponent implements OnInit {

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }

  ngOnInit(): void {
  }

}
