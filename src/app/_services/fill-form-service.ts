import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, retry } from "rxjs";
import { environment } from "src/environments/environment";
import { FillForm } from "../models/fill-form";

@Injectable({ providedIn: 'root'})
export class FillFormService{
    apiUrl = environment.apiUrl;
    endpoint: string = '${this.apiUrl}/fillForm';

    constructor(private http: HttpClient) {

    }

    public create(data: FillForm) {
        return this.http.put<FillForm>(this.endpoint, data);
    }
}