import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-probability-bar',
  templateUrl: './probability-bar.component.html',
  styleUrls: ['./probability-bar.component.css']
})
export class ProbabilityBarComponent implements OnInit {

  @Input() name: string = '';
  @Input() percent: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
