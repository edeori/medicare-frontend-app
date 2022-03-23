import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AppState } from '../../state/app.state';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Select(AppState.authenticatedUser)
    public authenticatedUser$!: Observable<ReturnType<typeof AppState.authenticatedUser>>;

  constructor(
    private _keycloakService: KeycloakService,
    private _store: Store
  ) { }

  ngOnInit(): void {
  }

  public async logout() {
    await this._keycloakService.logout();
  }

}
