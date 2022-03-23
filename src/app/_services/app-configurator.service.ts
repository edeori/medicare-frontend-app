import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfiguration } from '../models/app-configuration';
import ConfigJson from '../../configs/config.local.json'

@Injectable({
    providedIn: 'root'
})
export class AppConfiguratorService {

    private _appConfig?: AppConfiguration;

    constructor(
        private _http: HttpClient
    ) {
    }

    public async loadConfig() {
        if (this._appConfig) {
            return;
        }

        this._appConfig = ConfigJson;
    }

    public get configuration(): AppConfiguration {
        return this._appConfig!;
    }
}