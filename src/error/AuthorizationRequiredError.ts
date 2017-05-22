import {Action} from "../Action";
import {ForbiddenError} from "../http-error/ForbiddenError";

/**
 * Thrown when authorization is required thought @CurrentUser decorator.
 */
export class AuthorizationRequiredError extends ForbiddenError {

    name = "AuthorizationRequiredError";

    constructor(action: Action) {
        super();
        Object.setPrototypeOf(this, AuthorizationRequiredError.prototype);
        const uri = action.request.method + " " + action.request.url; // todo: check it it works in koa
        this.message = `Authorization is required for request on ${uri}`;
    }

}