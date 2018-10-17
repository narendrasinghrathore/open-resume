import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homePageTitle: string;

  constructor() {
    this.homePageTitle = 'Welcome to OPEN-RESUME';
   }

  ngOnInit() {
  }

}
