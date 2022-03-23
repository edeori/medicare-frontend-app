import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { PropbabilityDTO } from "../models/probability-dto";

@Injectable({ providedIn: 'root'})
export class CalculatorService{
    apiUrl = environment.apiUrl;
    endpoint: string = '${this.apiUrl}/calculator';

    constructor(private http: HttpClient) {

    }

    getAllByUser() {
        let fakeProb: PropbabilityDTO[] = [
            {name: 'name1asdffffffffffffffffffffffffffffffff', percent: 20},
            {name: 'name2dfdghggggggggggggggggggggggggggggggggg', percent: 30},
            {name: 'name3dfghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', percent: 40}
        ]
        return fakeProb;
       // return this.http.get<PropbabilityDTO[]>(this.endpoint);
    }
}