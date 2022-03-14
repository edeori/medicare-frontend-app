import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutText = 'This is the about text.';
  headerText = 'The Header';

  constructor() { }

  ngOnInit(): void {
  }

}
