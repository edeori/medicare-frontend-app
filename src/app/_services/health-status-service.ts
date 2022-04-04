import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HealthStatusDTO } from "../models/health-status-dto";

@Injectable({ providedIn: 'root' })
export class HealthStatusService {
    base: string = '/api/HealthStatus';
    userEndpoint: string = '/user';

    constructor(private http: HttpClient) {

    }

    getAllByUser(): Observable<HealthStatusDTO> {
        return this.http.get<HealthStatusDTO>(this.base + this.userEndpoint);
    }
}