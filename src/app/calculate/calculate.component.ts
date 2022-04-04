import { Component, OnInit } from '@angular/core';
import { PatientDataDTO } from '../models/patient-data-dto';
import { PotentialIllnessDTO } from '../models/potential-illness-dto';
import { PatientDataService } from '../_services/patient-data-service';
import { HealthStatusService } from '../_services/health-status-service';
import { MachineLearnService } from '../_services/machine-learn-service';
import { HealthStatusDTO } from '../models/health-status-dto';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  public potentialIllnessList: PotentialIllnessDTO[] = [];

  constructor(
    private machineLearnService: MachineLearnService,
    private patientDataService: PatientDataService) {

    this.patientDataService.getPatientData().subscribe((patientData: PatientDataDTO) => {
      if (patientData) {
        machineLearnService.processHealthStatus(patientData.id).subscribe((healthStatus: HealthStatusDTO) => {
          this.potentialIllnessList = healthStatus.potentialIllnesses;
          this.potentialIllnessList.sort((a, b) => a.illness.localeCompare(b.illness));
        });
      }
    });
  }

  ngOnInit(): void {
  }

}
