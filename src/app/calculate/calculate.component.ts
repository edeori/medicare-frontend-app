import { Component, OnInit } from '@angular/core';
import { PropbabilityDTO } from '../models/probability-dto';
import { CalculatorService } from '../_services/calculator-service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  public probabilityList: PropbabilityDTO[] = [];

  constructor(private calculatorService: CalculatorService) {
    this.probabilityList = this.calculatorService.getAllByUser();

    /*/
    this.calculatorService.getAllByUser().subscribe((res) => {
      this.probabilityList = res;
      this.probabilityList.sort((a, b) => a.name.localeCompare(b.name));
    });
/*/
  }

  ngOnInit(): void {
  }

}
