/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Identity } from './Identity';
import {
    IdentityFromJSON,
    IdentityFromJSONTyped,
    IdentityToJSON,
} from './Identity';
import type { ContinueWith } from './ContinueWith';
import {
    ContinueWithFromJSON,
    ContinueWithFromJSONTyped,
    ContinueWithToJSON,
} from './ContinueWith';
import type { Session } from './Session';
import {
    SessionFromJSON,
    SessionFromJSONTyped,
    SessionToJSON,
} from './Session';

/**
 * The Response for Registration Flows via API
 * @export
 * @interface SuccessfulNativeRegistration
 */
export interface SuccessfulNativeRegistration {
    /**
     * Contains a list of actions, that could follow this flow
     * 
     * It can, for example, this will contain a reference to the verification flow, created as part of the user's
     * registration or the token of the session.
     * @type {Array<ContinueWith>}
     * @memberof SuccessfulNativeRegistration
     */
    continue_with?: Array<ContinueWith>;
    /**
     * 
     * @type {Identity}
     * @memberof SuccessfulNativeRegistration
     */
    identity: Identity;
    /**
     * 
     * @type {Session}
     * @memberof SuccessfulNativeRegistration
     */
    session?: Session;
    /**
     * The Session Token
     * 
     * This field is only set when the session hook is configured as a post-registration hook.
     * 
     * A session token is equivalent to a session cookie, but it can be sent in the HTTP Authorization
     * Header:
     * 
     * Authorization: bearer ${session-token}
     * 
     * The session token is only issued for API flows, not for Browser flows!
     * @type {string}
     * @memberof SuccessfulNativeRegistration
     */
    session_token?: string;
}

/**
 * Check if a given object implements the SuccessfulNativeRegistration interface.
 */
export function instanceOfSuccessfulNativeRegistration(value: object): value is SuccessfulNativeRegistration {
    if (!('identity' in value) || value['identity'] === undefined) return false;
    return true;
}

export function SuccessfulNativeRegistrationFromJSON(json: any): SuccessfulNativeRegistration {
    return SuccessfulNativeRegistrationFromJSONTyped(json, false);
}

export function SuccessfulNativeRegistrationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuccessfulNativeRegistration {
    if (json == null) {
        return json;
    }
    return {
        
        'continue_with': json['continue_with'] == null ? undefined : ((json['continue_with'] as Array<any>).map(ContinueWithFromJSON)),
        'identity': IdentityFromJSON(json['identity']),
        'session': json['session'] == null ? undefined : SessionFromJSON(json['session']),
        'session_token': json['session_token'] == null ? undefined : json['session_token'],
    };
}

export function SuccessfulNativeRegistrationToJSON(value?: SuccessfulNativeRegistration | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'continue_with': value['continue_with'] == null ? undefined : ((value['continue_with'] as Array<any>).map(ContinueWithToJSON)),
        'identity': IdentityToJSON(value['identity']),
        'session': SessionToJSON(value['session']),
        'session_token': value['session_token'],
    };
}

