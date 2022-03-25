import { Component, OnInit } from '@angular/core';
import { PotentialIllnessDTO } from '../models/potential-illness-dto';
import { CalculatorService } from '../_services/calculator-service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  public potentialIllnessList: PotentialIllnessDTO[] = [];

  constructor(private calculatorService: CalculatorService) {
    //this.potentialIllnessList = this.calculatorService.getAllByUser().potentialIllnesses;

    this.calculatorService.getAllByUser().subscribe((res) => {
      this.potentialIllnessList = res.potentialIllnesses;
      this.potentialIllnessList.sort((a, b) => a.illness.localeCompare(b.illness));
    });
  }

  ngOnInit(): void {
  }

}
