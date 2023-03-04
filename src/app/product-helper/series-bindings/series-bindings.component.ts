import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-series-bindings',
  templateUrl: './series-bindings.component.html',
  styleUrls: ['./series-bindings.component.css']
})
export class SeriesBindingsComponent implements OnInit {

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }

  ngOnInit(): void {
  }

}
