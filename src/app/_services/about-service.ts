import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AboutDTO } from "../models/about-dto";

@Injectable({ providedIn: 'root'})
export class AboutService{
    endpoint: string = '/api/About/about';

    constructor(private http: HttpClient) {

    }

    public getAbout() {
        //return 'This is the header text';
        return this.http.get<AboutDTO>(this.endpoint);
    }
}