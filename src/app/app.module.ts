import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarLeftComponent } from './components/sidebar-left/sidebar-left.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AboutComponent } from './about/about.component';
import { CalculateComponent } from './calculate/calculate.component';
import { FillFormComponent } from './fill-form/fill-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProbabilityBarComponent } from './components/probability-bar/probability-bar.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { KeycloakAngularModule, KeycloakEventType, KeycloakService } from 'keycloak-angular';
import { AppConfiguratorService } from './_services/app-configurator.service';
import { NgxsModule, Store } from '@ngxs/store';
import { AppStateActions } from './state/app.actions';
import SetAuthenticatedUser = AppStateActions.SetAuthenticatedUser;
import { AppState } from './state/app.state';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmationDialog } from './components/dialog/confirmation-dialog';
import { EnumToArrayPipe } from './components/pipes/enum-to-array.pipe';

const appInitializerFn = (keycloak: KeycloakService, appConfigService: AppConfiguratorService) => {
  return async () => {
    await appConfigService.loadConfig();

    return keycloak.init({
      config: {
        url: appConfigService.configuration.authUrl,
        realm: appConfigService.configuration.keycloakRealm,
        clientId: appConfigService.configuration.keycloakClientId,
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
      enableBearerInterceptor: true,
      bearerExcludedUrls: ['/public'],
      loadUserProfileAtStartUp: true,
    });
  };
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarLeftComponent,
    LoginComponent,
    MenuComponent,
    AboutComponent,
    CalculateComponent,
    FillFormComponent,
    ProbabilityBarComponent,
    LayoutComponent,
    ConfirmationDialog,
    EnumToArrayPipe
  ],
  imports: [
    KeycloakAngularModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production,
  }),
  RouterModule,
  AppRoutingModule
  // NgxsLoggerPluginModule.forRoot({
  //     disabled: environment.production
  // }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [KeycloakService, AppConfiguratorService]
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialog]
})
export class AppModule {
  constructor(
    private _store: Store,
    private _kc: KeycloakService
    ) {
    this._kc.keycloakEvents$.subscribe(event => {
      
      switch (event.type) {
        case KeycloakEventType.OnAuthSuccess:
          return this._handleAuthSuccess();
        case KeycloakEventType.OnTokenExpired:
          return this._refreshToken();
        default:
          return;
      }

    });
  }

  private _handleAuthSuccess() {
    this._kc.loadUserProfile().then(user => {
      this._store.dispatch(new SetAuthenticatedUser({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        username: user.username || ''
      }));
    });
  }

  private _refreshToken() {
    this._kc.updateToken(20);
  }

}
