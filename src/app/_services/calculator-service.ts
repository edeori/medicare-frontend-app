import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HealthStatusDTO } from "../models/health-status-dto";
import { IllnessCategoryEnum } from "../models/illness-category.enum";

@Injectable({ providedIn: 'root' })
export class CalculatorService {
    base: string = '/api/HealthStatus';
    userEndpoint: string = '/user';

    constructor(private http: HttpClient) {

    }

    getAllByUser() {
        /*/
        let fakeProb: HealthStatusDTO = {
            id: 'asdf',
            patientId: 'patientájdí',
            potentialIllnesses:
            [
                { id: '1', illness: IllnessCategoryEnum.BLOOD, percent: 20 },
                { id: '2', illness: IllnessCategoryEnum.CANCER_AND_NEOPLASMS, percent: 30 },
                { id: '3', illness: IllnessCategoryEnum.INFECTION, percent: 40 }
            ]
        }
        return fakeProb;
        /*/
        return this.http.get<HealthStatusDTO>(this.base + this.userEndpoint);
    }
}