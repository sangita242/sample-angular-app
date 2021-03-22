import { Component, OnInit } from '@angular/core';
import { getValueInRange } from '@ng-bootstrap/ng-bootstrap/util/util';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getUserValue(value: any){
    console.warn(value)
     
  }

}
