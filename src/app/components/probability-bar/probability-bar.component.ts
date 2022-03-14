import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-probability-bar',
  templateUrl: './probability-bar.component.html',
  styleUrls: ['./probability-bar.component.css']
})
export class ProbabilityBarComponent implements OnInit {

  seconds = 0;

  constructor() {
    this.seconds = 50;
  }

  ngOnInit(): void {
  }

}
