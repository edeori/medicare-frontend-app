import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AppStateActions } from './app.actions';
import { AuthenticatedUser } from '../models/authenticatedUser';
import SetAuthenticatedUser = AppStateActions.SetAuthenticatedUser;

export interface AppStateModel {
    isLoading: boolean;
    user?: AuthenticatedUser;
}

@State<AppStateModel>({
    name: 'app',
    defaults: {
        isLoading: false
    }
})
@Injectable()
export class AppState {

    @Selector()
    static isHttpLoading(state: AppStateModel): boolean {
        return state.isLoading;
    }

    @Selector()
    static authenticatedUser(state: AppStateModel): AuthenticatedUser {
        return state.user!;
    }

    @Action(SetAuthenticatedUser)
    setAuthenticatedUser(ctx: StateContext<AppStateModel>, action: SetAuthenticatedUser) {
        ctx.patchState({
            user: action.payload
        });
    }

}
