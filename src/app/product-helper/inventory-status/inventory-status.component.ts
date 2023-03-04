import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-status',
  templateUrl: './inventory-status.component.html',
  styleUrls: ['./inventory-status.component.css']
})
export class InventoryStatusComponent implements OnInit {

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }

  ngOnInit(): void {
  }

}
