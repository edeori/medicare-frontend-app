import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HealthStatusDTO } from "../models/health-status-dto";
import { PatientDataDTO } from "../models/patient-data-dto";

@Injectable({ providedIn: 'root' })
export class MachineLearnService {
    base: string = '/api/MachineLearn';
    userEndpoint: string = '/process/';
    teachPatientDataEndpoint: string = '/teachPatientData';

    constructor(private http: HttpClient) {

    }

    neuralTeachByPatientData(patientData: PatientDataDTO) {
        return this.http.post<HealthStatusDTO>(this.base + this.teachPatientDataEndpoint, patientData);
    }

    processHealthStatus(patientDataId: string): Observable<HealthStatusDTO> {
        return this.http.get<HealthStatusDTO>(this.base + this.userEndpoint + patientDataId);
    }
}