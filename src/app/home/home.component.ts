import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content = 'Welcome do Meat App!';

  constructor() { }

  ngOnInit() {
  }

}
