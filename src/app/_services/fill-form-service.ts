import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, EMPTY, Observable, of, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { PatientDataDTO } from "../models/patient-data-dto";

@Injectable({ providedIn: 'root' })
export class FillFormService {
    base: string = '/api/DataStore';
    createUrl: string = '/PatientData';
    getUrl: string = '/PatientData/user';

    constructor(private http: HttpClient) {

    }

    public getPatientData(): Observable<PatientDataDTO> {
        return this.http.get<PatientDataDTO>(this.base + this.getUrl);
    }

    public create(data: PatientDataDTO) {
        return this.http.post<PatientDataDTO>(this.base + this.createUrl, data);
    }
}