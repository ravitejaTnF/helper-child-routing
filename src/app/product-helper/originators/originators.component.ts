import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-originators',
  templateUrl: './originators.component.html',
  styleUrls: ['./originators.component.css']
})
export class OriginatorsComponent implements OnInit {

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }

  ngOnInit(): void {
  }

}
