import { AuthenticatedUser } from "../models/authenticatedUser";

export namespace AppStateActions {
    export class SetAuthenticatedUser {
        public static readonly type = '[Authentication] Set authenticated user';

        constructor(public payload: AuthenticatedUser) {
        }
    }
}