import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imprints-publishers',
  templateUrl: './imprints-publishers.component.html',
  styleUrls: ['./imprints-publishers.component.css']
})
export class ImprintsPublishersComponent implements OnInit {

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }

  ngOnInit(): void {
  }

}
